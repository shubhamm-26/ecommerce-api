const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        trim: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required!']
    },
    available: {
        type: Boolean,
        default: true
    },

    });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


