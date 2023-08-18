const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
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

const OrderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required!'],
        unique: true
    },
    items: [orderItemSchema],
    amount: {
        type: Number,
        required: [true, 'Amount is required!'],
        trim: true
}
    });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
