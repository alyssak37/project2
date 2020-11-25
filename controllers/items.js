const Item = require('../models/items');
const Shopper = require('../models/shopper')

module.exports = {
    new: newItem,
    create,
    //addItem,
   
}

function newItem(req, res) {
    res.render('items/new', {
        shopperId: req.params.id
    })
    }



function create(req, res) {
    Item.create(req.body, function(err, item) {
        res.redirect('/items/new')
    })
}

/*function addItem(req, res) {
    Shopper.findById(req.params.id, function(err, shopper) {
        shopper.items.push(req.body)
        shopper.save(function(err) {
            res.redirect(`/shoppers/${shopper._id}`);
        });
    });
};*/