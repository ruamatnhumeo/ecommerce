const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgList: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    size: {
        type: Map,
        of: String
    }, 
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;