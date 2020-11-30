const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,   
    rating: {type: Number, min: 1, max: 5, default: 5},
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Shopper'
    },
}, {
    timestamps: true
});

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
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);