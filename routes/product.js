const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

// @route GET /products
// @desc get all products
// @access private
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            throw Error('No products!');
        };

        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// @route GET /:category
// @desc get collection from products
// @access public
router.get('/:category', async (req, res) => {
    try {
        const poductsBasedOnCollection = await Product.find(req.params.collection);
        if (!poductsBasedOnCollection) {
            throw Error('No collection found!');
        };

        res.status(200).json(poductsBasedOnCollection);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// @route GET /product/:id
// @desc get product by id 
// @access public
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            throw Error('No product found!');
        };

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// @route POST /product
// @desc create/add a product
// @access private
router.post('/', async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        imgName: req.body.imgName,
        category: req.body.category,
        sizes: req.body.sizes,
    });

    try {
        const savedProduct = await newProduct.save();
        if (!savedProduct) {
            throw Error('Error occured when saving product!');
        };

        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

// @route DELETE product/:id
// @desc remove product
// @access private for admin
router.delete('/:id', async (req, res) => {
    try {
        const productWillRemove = await Product.findById(req.params.id);
        if (!productWillRemove) {
            throw Error('No product found!');
        };

        const removed = await productWillDelete.remove();
        if (!removed) {
            throw Error('Error occured when removing product!');
        }

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({
            msg: error.message,
            success: false
        });
    }
});

// @route PUT product/:id
// @desc update product
// @access private for admin
router.put('/:id', async (req, res) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imgName: req.body.imgName,
        category: req.body.category,
        sizes: req.body.sizes,
    });

    try {
        const productId = req.params.id;
        if (!productId) {
            throw Error('No product found!');
        }

        const updatedProduct = await Product.update(id, newProduct);
        if (!updatedProduct) {
            throw Error('Error occured when updating product!');
        };

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

module.exports = router;
