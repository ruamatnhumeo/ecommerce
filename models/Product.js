const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const productSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	price: {
		type: String,
		required: true,
	},
	description: {
		type: Array,
		required: true,
	},
	imgList: {
		type: Array,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	size: {
		type: Array,
	},
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
