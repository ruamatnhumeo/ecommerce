const express = require("express");

const router = express.Router();
const Product = require("../models/Product");
const authMiddleware = require("../middleware/auth.middleware");
const adminMiddleware = require("../middleware/admin.middleware");

// @route GET /
// @desc get all products
// @access public
router.get("/", async (req, res) => {
	const searchObject = req.query.searchTerm
		? {
				name: {
					$regex: req.query.searchTerm,
					$options: "i",
				},
		  }
		: {};

	try {
		const products = await Product.find(searchObject);

		if (!products) {
			throw Error("No products found!");
		}

		res.status(200).json(products);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});

// @route GET /:id
// @desc get product by id
// @access public
router.get("/detail/:id", async (req, res) => {
	const _id = req.params.id;
	console.log(_id);

	try {
		if (_id.match(/^[0-9a-fA-F]{24}$/)) {
			// Yes, it's a valid ObjectId, proceed with `findById` call.
			const product = await Product.findById(_id);

			res.status(200).json(product);
		} else {
			throw Error("No product found!");
		}
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
		description: req.body.description,
		imgList: req.body.imgList,
		category: req.body.category,
		size: req.body.sizes,
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
		imglist: req.body.imgList,
		category: req.body.category,
		size: req.body.sizes,
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
