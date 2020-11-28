const router = require('express').Router();
const shoppersCtrl = require('../controllers/shoppers');


router.get('/shoppers', shoppersCtrl.index);
router.get('/new', shoppersCtrl.new);
router.post('/', shoppersCtrl.create);
router.get('/:id', shoppersCtrl.show);
router.post('/items', shoppersCtrl.addItem);



function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;