const crypto = require("crypto");
const ResetToken = require("../models/ResetToken");

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

module.exports = generate;
