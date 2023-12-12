const Order = require('../models/order');
const Product = require('../models/product');
const Cart = require('../models/cart');
const authMiddleware = require('../authmiddleware');

const getOrderHistory = async (req, res) => {
    const userId = req.userData.userId;
    try {
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders' });
    }
}

const placeOrder = async (req, res) => {
    const userId = req.userData.userId;
    try {
        const cart = await Cart.findOne({ userId }).populate('items.productId');
        if (!cart) {
            return res.status(404).json({ message: 'No Items in cart' });
        }

        let amount = 0;
        cart.items.forEach(item => {
            amount += item.quantity * item.productId.price;
        }
        );

        const order = new Order({ userId, items: cart.items, amount });
        await order.save();
        await Cart.deleteOne({ userId });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error placing order' });
    }
}

module.exports = {
    getOrderHistory,
    placeOrder
}