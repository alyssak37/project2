const Review = require('../models/items');
const Item = require('../models/items');

module.exports = {
    new: newReview,
    create,
    edit,
    update,
    delete: deleteReview
}

function newReview(req, res) {
    res.render('shoppers/new', {
        itemId: req.params.id
    });
};


function create(req, res) {
    Item.findById(req.params.id, function(err, item) {
        req.body.createdBy = item.createdBy;
        item.reviews.push(req.body)
        item.save(function(err){
            res.redirect('/shoppers')
        })
    })
}

function edit(req, res) {
    Item.findOne({"reviews._id": req.params.id}, function(err, item){
        const review = item.reviews.id(req.params.id);
        res.render('shoppers/edit', {
            reviewId: req.params.id,
            review
    })   
 })
}

function update(req, res) {
    Item.findOne({"reviews._id": req.params.id}, function(err, item){
        const review = item.reviews.id(req.params.id);
        review.overwrite(req.body)
        item.save(function(err){
            res.redirect('/shoppers');
        })
    })
};

    function deleteReview(req, res) {
        Review.findByIdAndDelete(req.params.id);
        res.redirect('/shoppers');
    }