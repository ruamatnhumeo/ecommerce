const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

// @route GET /
// @desc get all products
// @access public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      throw Error("No products!");
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route GET /:id
// @desc get product by id
// @access public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      throw Error("No product found!");
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route POST /
// @desc create/add a product
// @access private for admin
router.post("/", authMiddleware, adminMiddleware, async (req, res) => {
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
      throw Error("Error occured when saving product!");
    }

    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @route DELETE /:id
// @desc remove product
// @access private for admin
router.delete("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const productWillRemove = await Product.findById(req.params.id);
    if (!productWillRemove) {
      throw Error("No product found!");
    }

    const removed = await productWillRemove.remove();
    if (!removed) {
      throw Error("Error occured when removing product!");
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({
      msg: error.message,
      success: false,
    });
  }
});

// @route PATCH /:id
// @desc update product
// @access private for admin
router.patch("/:id", authMiddleware, adminMiddleware, async (req, res) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imgName: req.body.imgName,
    category: req.body.category,
    sizes: req.body.sizes,
  };

  const productId = { _id: req.params.id };
  if (!productId) {
    res.status(400).json("No product found!");
  }

  try {
    const updatedProduct = await Product.updateOne(productId, {
      $set: newProduct,
    });

    if (!updatedProduct) {
      throw Error("Error occured when updating product!");
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ msg: error.message, success: false });
  }
});

// @route GET /:category
// @desc get category from products
// @access public
router.get("/:category", async (req, res) => {
  const condition = {
    category: req.params.category,
  };
  try {
    const category = await Product.find(condition);

    if (!category) {
      throw Error("No category found!");
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
