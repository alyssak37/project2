const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopperSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Shopper', shopperSchema);