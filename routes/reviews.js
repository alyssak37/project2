const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/items/:id/reviews/new', reviewsCtrl.new);
router.post('/items/:id/reviews', reviewsCtrl.create);
router.get('/reviews/:id/edit', reviewsCtrl.edit);
router.put('/reviews/:id', reviewsCtrl.update);
module.exports = router;