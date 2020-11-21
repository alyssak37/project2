const mongoose = require('mongoose');

const shopperSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Shopper', shopperSchema);