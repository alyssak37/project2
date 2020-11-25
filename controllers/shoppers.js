const Shopper = require('../models/shopper');
const Item = require('../models/items');

module.exports = {
    index,
    show,
    new: newShopper,
    create

}

function index(req, res) {
    Shopper.find({}, function(err, shoppers) {
        res.render('shoppers/index', {
            shoppers,
            user: req.user
        });
    });
};

function show(req, res){
    Shopper.findById(req.params.id, function(err, shopper) {
        Item.find({ shopper }, function(err, items) {
            res.render('shoppers/show', { shopper, items });
        });
    });
};

function newShopper(req, res) {
    res.render('shoppers/new', { title: 'Search Store'});
}

function create(req, res) {
    const shopper = new Shopper(req.body);
    shopper.save(function(err) {
        if (err) return res.redirect('/shoppers');
        res.redirect(`/shoppers/${shopper._id}`);
    });
};
