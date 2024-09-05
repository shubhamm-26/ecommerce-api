const Category = require('../models/category');

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getCategoryByName = async (req, res) => {
    try {
        const category = await Category.findOne({ name: req.params.name });
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name
    });
    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllCategories,
    getCategoryByName,
    createCategory
}