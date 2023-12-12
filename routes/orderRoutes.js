const express = require('express');
const router = express.Router();
const authMiddleware = require('../authmiddleware');

const orderController = require('../controllers/orderController');

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order related endpoints
 */

/**
 * @swagger
 * /orders/history:
 *   get:
 *     summary: Get order history for authenticated users
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of order history
 *       401:
 *         description: Unauthorized, authentication token missing or invalid
 */

router.get('/history', authMiddleware, orderController.getOrderHistory);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Place a new order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order placed successfully
 *       400:
 *         description: Bad request or order details incomplete
 *       401:
 *         description: Unauthorized, authentication token missing or invalid
 */

router.post('/', authMiddleware, orderController.placeOrder);

module.exports = router;
