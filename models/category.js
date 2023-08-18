const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
