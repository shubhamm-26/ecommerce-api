const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Category related endpoints
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 */

router.get('/', categoryController.getAllCategories);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created successfully
 *       400:
 *         description: Bad request or category already exists
 */

router.post('/', categoryController.createCategory);

/**
 * @swagger
 * /categories/name/{name}:
 *   get:
 *     summary: Get category by name
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the category
 *     responses:
 *       200:
 *         description: Category details
 *       404:
 *         description: Category not found
 */

router.get('/name/:name', categoryController.getCategoryByName);

module.exports = router;
