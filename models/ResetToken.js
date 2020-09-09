const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const resetTokenSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	token: {
		type: String,
		required: true,
	},
	expires: {
		type: Date,
		required: true,
	},
});

const ResetToken = mongoose.model("resetToken", resetTokenSchema);
module.exports = ResetToken;
