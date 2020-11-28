const Item = require('../models/items');
const Shopper = require('../models/shopper')

module.exports = {
    new: newItem,
    create
    
}

function newItem(req, res) {
    res.render('/shoppers', {
        shopperId: req.params.id
    });
}


function create(req, res) {
    Item.create(req.body, function (err, item) {
        res.redirect('/shoppers')
    })
}

