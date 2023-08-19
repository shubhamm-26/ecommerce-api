/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User registration and login endpoints
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/register', authController.register);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: ''
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request, invalid input or user already exists
 */

router.post('/login', authController.login);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginInput'
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               token: "your_access_token_here"
 *       401:
 *         description: Unauthorized, invalid credentials
 */
module.exports = router;
