const express = require("express");
const router = express.Router();
const config = require("../config");

const User = require("../models/User");
const ResetToken = require("../models/ResetToken");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = config.JWT_SECRET;

const crypto = require("crypto");

const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const SENDGRID_API_KEY = config.SENDGRID_API_KEY;
const transporter = nodemailer.createTransport(
	sendgridTransport({
		auth: {
			api_key: SENDGRID_API_KEY,
		},
	})
);

const authMiddleware = require("../middleware/auth.middleware");

// @route POST /login
// @desc login user
// @access public
router.post("/login", async (req, res) => {
	const { email, password } = req.body;

	// Simple validation
	if (!email || !password) {
		return res.status(400).json({ msg: "Please enter all fields" });
	}

	try {
		const user = await User.findOne({ email });

		if (!user) {
			throw Error("No user found!");
		}

		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			throw Error("Invalid password or email!");
		}

		//create/sign token
		const token = jwt.sign(
			{ id: user._id, isAdmin: user.isAdmin },
			JWT_SECRET,
			{ expiresIn: 3600 }
		);

		if (!token) {
			throw Error("Couldnt sign the token");
		}

		res.status(200).json({
			token,
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				isAdmin: user.isAdmin,
			},
		});
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

// @route POST /register
// @desc register user
// @access public
router.post("/register", async (req, res) => {
	const { email, password, name } = req.body;

	// Simple validation
	if (!email || !password || !name) {
		return res.status(400).json({ msg: "Please enter all fields" });
	}

	try {
		const user = await User.findOne({ email });

		if (user) {
			throw Error("User already exists!");
		}

		const salt = await bcrypt.genSalt(10);

		if (!salt) {
			throw Error("Something went wrong with bcrypt!");
		}

		const hash = await bcrypt.hash(password, salt);

		if (!hash) {
			throw Error("Something went wrong hashing the password");
		}

		const newUser = new User({
			name,
			email,
			password: hash,
		});

		const savedUser = await newUser.save();

		if (!savedUser) {
			throw Error("Something went wrong saving new user");
		}

		//create/sign token
		const token = jwt.sign(
			{ id: savedUser._id, isAdmin: savedUser.isAdmin },
			JWT_SECRET,
			{
				expiresIn: 3600,
			}
		);

		res.status(200).json({
			token,
			user: {
				id: savedUser._id,
				name: savedUser.name,
				email: savedUser.email,
			},
		});
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

// @route GET /:id
// @desc get user data
// @access private
router.get("/:id", authMiddleware, async (req, res) => {
	try {
		//get user data without password
		const user = await User.findById(req.params.id).select("-password");
		if (!user) {
			throw Error("No user found!");
		}

		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

// @route PATCH /:id
// @desc update user profile
// @access private
router.patch("/:id", authMiddleware, async (req, res) => {
	const newUser = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		registerDate: req.body.registerDate,
		street: req.body.street,
		city: req.body.city,
		phone: req.body.phone,
	};

	try {
		const userId = {
			_id: req.params.id,
		};
		if (!userId) {
			throw Error("No user exist!");
		}

		const updatedUser = await User.update(userId, { $set: newUser });
		if (!updatedUser) {
			throw Error("Error occured when updating user!");
		}

		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

//forget password
// @route POST /forget-password
// @desc forget password
// @access public
router.post("/forget-password", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email }).exec();
		if (!user) {
			throw new Error("No user found!");
		}
		const passwordResetObj = generate(user);

		transporter.sendMail({
			to: req.body.email,
			from: "ecommerce@nodejs.com",
			subject: "Reset your password",
			html: `
      <p>You requested a password reset!</p>
      <p>Click this <a href="http://localhost:3000/auth/reset-password/${passwordResetObj.token}">link</a> to reset a new password!</p>
      `,
		});

		res.status(200).json("success");
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

//reset password
// @route POST /reset-password
// @desc reset password
// @access private
router.post("/reset-password/:token", async (req, res) => {
	try {
		const token = req.params.token;
		const resetTokenObj = await ResetToken.findOneAndRemove({
			token,
			expires: { $gt: Date.now() },
		});
		if (!resetTokenObj) {
			throw Error("Token is not valid!");
		}

		const user = await User.findOne({ email: resetTokenObj.email }).exec();

		const salt = await bcrypt.genSalt(10);
		
		if (!salt) {
			throw Error("Something went wrong with bcrypt!");
		}

		const hashedPassword = await bcrypt.hash(password, salt);

		if (!hashedPassword) {
			throw Error("Something went wrong hashing the password");
		}

		user.password = hashedPassword;
		await user.save();

		res.status(200).json("password updated!");
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

const generate = (user) => {
	const email = user.email;
	const token = crypto.randomBytes(40).toString("hex");
	const ONE_HOUR_IN_MILLISECOND = 3600000;
	const expires = Date.now() + ONE_HOUR_IN_MILLISECOND;

	const tokenObject = new ResetToken({
		email,
		token,
		expires,
	});
	tokenObject.save();

	return tokenObject;
};

module.exports = router;
