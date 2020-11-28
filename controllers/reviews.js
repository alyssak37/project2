const Item = require('../models/items');

module.exports = {
    create,
}

function create(req, res) {
    Item.findById(req.params.id, function(err, item) {
        item.reviews.push(req.body)
        item.save(function(err){
            res.redirect('/shoppers')
        })
    })
}

