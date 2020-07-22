const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const orderSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    // totalPrice: {
    //     type: String,
    //     required: true
    // },
    // coment: {
    //     type: String,
    //     required: true
    // },
    // toStreet: {
    //     type: String,
    //     required: true
    // },
    // toCity: {
    //     type: String,
    //     required: true
    // },
    // fromId: {
    //     type: String,
    //     required: true
    // },
    // paymentType: {
    //     type: String,
    //     required: true
    // },
    // cart: {
    //     type: String,
    //     required: true
    // }
});

const Order = mongoose.model('order', orderSchema);

module.exports = Product;