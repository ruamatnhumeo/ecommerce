const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const orderSchema = new Schema({
	date: {
		type: Date,
		default: Date.now,
	},
	total: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	toCity: {
		type: String,
		required: true,
	},
	fromEmail: {
		type: String,
		required: true,
	},
	paymentMethod: {
		type: String,
		required: true,
	},
	cart: {
		type: String,
		required: true,
	},
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
