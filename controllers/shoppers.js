const Shopper = require('../models/shopper');
const Item = require('../models/items');

module.exports = {
    index,
    show,
    new: newShopper,
    create,
    addItem
    

}

function index(req, res) {
    Shopper.find({}).populate('createdBy').exec(function(err, shoppers) {
        res.render('shoppers/index', {
            shoppers,
            user: req.user
        });
    });
};

function newShopper(req, res) {
    res.render('shoppers/new');
}

function create(req, res) {
    req.body.createdBy = req.shopper._id;
    Shopper.create(req.body, function(err, shopper) {
        res.redirect('/shoppers');
    });
};

function show(req, res){
    Shopper.findById(req.params.id)
    .populate('createdBy').populate('items.createdBy').exec(function(err, shopper) {
        Item.find({ shopper: shopper._id}).populate('createdBy').exec(function(err, items) {
            console.log(shopper, items)
            res.render('shoppers/', { shopper, items});
        })
    });
};

function addItem(req, res) {
    req.shopper.items.push(req.body);
  req.shopper.save(function(err) {
    res.redirect('/show');
  });
};