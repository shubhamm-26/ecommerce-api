const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const productController = require('../controllers/productController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product related endpoints
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */

router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product
 *     responses:
 *       200:
 *         description: Product details
 *       404:
 *         description: Product not found
 */

router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request or product already exists
 */

router.post('/', authMiddleware, productController.createProduct);

/**
 * @swagger
 * /products/category/{categoryName}:
 *   get:
 *     summary: Get products by category
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the category
 *     responses:
 *       200:
 *         description: List of products in the category
 */

router.get('/category/:categoryName', productController.getProductByCategory);

/**
 * @swagger
 * /products/update/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       400:
 *         description: Bad request or product not found
 */

router.put("/update/:id", authMiddleware, productController.updateProduct);

/**
 * @swagger
 * /products/delete/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       400:
 *         description: Bad request or product not found
 */

router.delete("/delete/:id", authMiddleware, productController.deleteProduct);

module.exports = router;
