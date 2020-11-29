const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/items/:id/reviews', reviewsCtrl.create);
//router.put('/items/:id', reviewsCtrl.update);
module.exports = router;