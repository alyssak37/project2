const mongoose = require('mongoose');
const Schema = mongoose.Schema

const itemSchema = new Schema({
    clothing: {
        type: String,
    },
    color: {
        type: String,
        enum: ['Blue', 'Red', 'Yellow', 'Orange', 'Green', 'Purple', 'Pink', 'Black', 'Grey', 'White']
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Shopper'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);