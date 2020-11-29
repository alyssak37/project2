const Shopper = require('../models/shopper');
const Items = require('../models/items');

module.exports = {
    index,
    show,
    new: newShopper,
    create,
    


}

function index(req, res) {
    console.log(req.user)
    Shopper.findById(req.user._id, function(err, shoppers) {
        Items.find({}, function(err, items) {
            
        res.render('shoppers/index', { items, shoppers});
    })
    });
};

function newShopper(req, res) {
    res.render('shoppers/new');
}

function create(req, res) {
    const shopper = new Shopper(req.body);
    shopper.save(function(err) {
        if (err) return res.redirect('/shoppers/new');
        res.redirect('/shoppers');
    });
};

function show(req, res) {
    Shopper.findById(req.params.id, function(err, shopper) {
        Item.find({ }, function(err, items) {
            res.render('shoppers/show', { shopper, items });
        })
    });
};

