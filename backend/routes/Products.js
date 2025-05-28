const express = require("express");
const router = express.Router();

// Import controller functions
const { getProducts, createProduct, updateProduct, deleteProduct, getProductById } = require("../controllers/productController");

// @route   GET /api/products
// @desc    Get all products
router.get("/", getProducts);

// @route   POST /api/products
// @desc    Create a new product
router.post("/", createProduct);

// @route   PUT /api/products/:id
// @desc    Update a product by ID
router.put("/:id", updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete a product by ID
router.delete("/:id", deleteProduct);

router.get("/:id", getProductById);

module.exports = router;
