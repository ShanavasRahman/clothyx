const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: randomUUID
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    imageURL: {
        type: Array,
    },
    status: {
        type: String,
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);