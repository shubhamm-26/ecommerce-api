const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product', 
        required: [true, 'Product is required!'],
        unique: true
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required!'],
        trim: true
    }
});

const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required!'],
        unique: true
    },
    items: [cartItemSchema]
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;