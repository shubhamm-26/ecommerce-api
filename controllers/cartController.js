const Cart = require('../models/cart');
const jwt = require("jsonwebtoken");
const Product = require('../models/product');

    const getCart = async (req, res) => {
        const userId = req.userData.userId;
        try {
            const cart = await Cart.findOne({ userId }).populate('items.productId');
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching cart' });
        }
    };

    const addToCart = async (req, res) => {
        const userId = req.userData.userId;
        const { productId, quantity } = req.body;
        console.log(productId, quantity);
        try {
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            let cart = await Cart.findOne({ userId });
            if(!cart) {
                cart = new Cart({ userId,items:[] });
            }

            const existingItem = cart.items.find(item => item.productId == productId);
            if(existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }

            await cart.save();
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Error adding to cart' });
        }
    }

    const deleteFromCart = async (req, res) => {
        const userId = req.userData.userId;
        const { productId } = req.body;
        try {
            let cart = await Cart.findOne({ userId });
            if(!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }
            const existingItem = cart.items.find(item => item.productId == productId);
            if(!existingItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            cart.items = cart.items.filter(item => item.productId != productId);
            await cart.save();
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: 'Error deleting from cart' });
        }
    }

    module.exports = {
        getCart,
        addToCart,
        deleteFromCart
    }