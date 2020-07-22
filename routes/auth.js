const express = require("express");
const router = express.Router();
const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const JWT_SECRET = config.JWT_SECRET;

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
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 3600 });

    if (!token) {
      throw Error("Couldnt sign the token");
    }

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route POST /register
// @desc register user
// @access public
router.post("/login", async (req, res) => {
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
    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 3600,
    });

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
router.get("/:id", async (req, res) => {
  try {
    //get user data without password
    const user = await Product.findById(req.params.id).select("-password");
    if (!user) {
      throw Error("No user found!");
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route PUT /:id
// @desc update user profile
// @access private
router.put("/:id", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    registerDate: req.body.registerDate,
    street: req.body.street,
    city: req.body.city,
    phone: req.body.phone,
  });

  try {
    const userId = req.params.id;
    if (!userId) {
      throw Error("No user exist!");
    }

    const updatedUser = await Product.update(id, newProduct);
    if (!updatedUser) {
      throw Error("Error occured when updating user!");
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
