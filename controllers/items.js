const Item = require('../models/items');
const Shopper = require('../models/shopper')

module.exports = {
    new: newItem,
    create
    
}

function newItem(req, res) {
    Item.find({}, function(err, items) {
    res.render('/shoppers', {
        title: 'Find Item',
        items
    });
})
}

function create(req, res) {
    req.body.createdBy = req.params.id;
    Item.create(req.body, function (err, item) {
        res.redirect('/new')
    })
}

