const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');


router.get('/shoppers/:id/items/new', itemsCtrl.new);
router.post('/shoppers/:id/items', itemsCtrl.create);



module.exports = router;