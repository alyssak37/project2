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
    res.render('reviews/new', {
        itemId: req.params.id
    });
};


function create(req, res) {
    Item.findById(req.body.id, function(err, item) {
        item.reviews.push(req.body)
        item.save(function(err){
            res.redirect(`/items/${items._id}/reviews`)
        })
    })
}

function edit(req, res) {
    res.render('reviews/edit', {
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
        Review.delete(req.params.id);
        res.redirect('/shoppers');
    }