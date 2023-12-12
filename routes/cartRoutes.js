const express = require('express');
const router = express.Router();
const authMiddleware = require('../authmiddleware');

const cartController = require('../controllers/cartController');

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart related endpoints
 */

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get user's cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User's cart
 *       401:
 *         description: Unauthorized, authentication token missing or invalid
 */

router.get('/', authMiddleware, cartController.getCart);

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartItem'
 *     responses:
 *       201:
 *         description: Product added to cart
 *       400:
 *         description: Bad request or product already in cart
 *       401:
 *         description: Unauthorized, authentication token missing or invalid
 */

router.post('/', authMiddleware, cartController.addToCart);

/**
 * @swagger
 * /cart:
 *   delete:
 *     summary: Remove a product from the cart
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CartItem'
 *     responses:
 *       200:
 *         description: Product removed from cart
 *       400:
 *         description: Bad request or product not in cart
 *       401:
 *         description: Unauthorized, authentication token missing or invalid
 */

router.delete('/', authMiddleware, cartController.deleteFromCart);

module.exports = router;
