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
        item.reviews.push(req.body)
        item.save(function(err){
            res.redirect('/shoppers')
        })
    })
}

function edit(req, res) {
    res.render('shoppers/edit', {
        reviewId: req.params.id,
        review: Review.get(req.params.id)
    })
}

function update(req, res) {
     req.body.done = false;
    Review.findByIdAndUpdate(req.body, req.params.id);
    res.redirect('/shoppers');
    };

    function deleteReview(req, res) {
        Review.findByIdAndDelete(req.params.id);
        res.redirect('/shoppers');
    }