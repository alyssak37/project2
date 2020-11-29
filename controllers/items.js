const Item = require('../models/items');
const Shopper = require('../models/shopper')

module.exports = {
    new: newItem,
    create
    
}

function newItem(req, res) {
    Shopper.findById(req.params.id, function(err, shopper) {
        Item.find({}, function(err, items) {
            res.render('shoppers/show', {
                title: 'Find Item',
                items, shopper
        });
    });
});
}

function create(req, res) {
    req.body.createdBy = req.params.id;
    Item.create(req.body, function (err, item) {
        res.redirect('/shoppers')
    })
}

