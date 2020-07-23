const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

// @route GET /
// @desc get all Orders for admin
// @access private for admin
router.get('/', async (req, res) => {
    try {
        const Orders = await Order.find();
        if (!Orders) {
            throw Error('No Orders!');
        };

        res.status(200).json(Orders);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// @route GET /:id
// @desc get Order by id for user / history order
// @access private for user
router.get('/:id', async (req, res) => {
    try {
        const historyCondition = {
            userId : req.params.id
        };
        const history = await Order.find(historyCondition);
        if (!history) {
            throw Error('No history!');
        };

        res.status(200).json(history);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// @route POST /
// @desc create/add an order
// @access public
router.post('/', async (req, res) => {
    const newOrder = new Order({
        number: req.body.number,
        totalPrice: req.body.totalPrice,
        coment: req.body.coment,
        toStreet: req.body.toStreet,
        toCity: req.body.toCity,
        fromId: req.body._id,
        paymentType: req.body.paymentType,
        cart: req.body.cart
    });

    try {
        const savedOrder = await newOrder.save();
        if (!savedOrder) {
            throw Error('Error occured when saving Order!');
        };

        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// @route DELETE /:id
// @desc remove order
// @access private for admin
router.delete('/:id', async (req, res) => {
    try {
        const orderWillRemove = await Order.findById(req.params.id);
        if (!orderWillRemove) {
            throw Error('No order found!');
        };

        const removed = await orderWillRemove.remove();
        if (!removed) {
            throw Error('Error occured when removing order!');
        }

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
            success: false
        });
    }
});

module.exports = router;
