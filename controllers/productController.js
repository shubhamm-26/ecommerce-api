const Product = require('../models/product');
const Category = require('../models/category');
const User = require('../models/user');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    const { name, description, price, category, available } = req.body;
    try {
        const userRole = await User.findById(req.userData.userId);

        if (userRole.role !== 'admin') {
            return res.status(403).json({ message: 'Only admin users can add products' });
        }
        const existingProduct = await Product.findOne({ name });
        if (existingProduct) {
            return res.status(400).json({ message: 'Product already exists' });
        }
        let categorySearch = await Category.findOne({ name: category });
        if (!categorySearch) {
            categorySearch = new Category({ name: category });
            await categorySearch.save();
        }
        const product = new Product({
            name,
            description,
            price,
            category: categorySearch._id,
            available
        });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getProductByCategory = async (req, res) => {
    try {
        const categoryName = req.params.categoryName;
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        // Find products by the category's ID
        const products = await Product.find({ category: category._id });

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products by category' });
    }
};

const updateProduct = async (req, res) => {
    const prodId = req.params.id
    const { name, description, price, category, available } = req.body;
    try {
        const userRole = await User.findById(req.userData.userId);

        if (userRole.role !== 'admin') {
            return res.status(403).json({ message: 'Only admin users can update products' });
        }
        const product = await Product.findById(prodId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        product.name = name;
        product.description = description;
        product.price = price;
        product.category = category;
        product.available = available;
        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
}
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const prodId = req.params.id
    try {
        const userRole = await User.findById(req.userData.userId);
        if (userRole.role !== 'admin') {
            return res.status(403).json({ message: 'Only admin users can delete products' });
        }
        const product = await Product.findByIdAndDelete(prodId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted' });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    updateProduct,
    getAllProducts,
    getProductById,
    createProduct,
    getProductByCategory,
    deleteProduct
};
