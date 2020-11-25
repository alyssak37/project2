const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');


router.get('/items/new', itemsCtrl.new);
router.post('/items', itemsCtrl.create);
router.post('/shopper/:id/items', itemsCtrl.addItem);

module.exports = router;