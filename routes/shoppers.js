const router = require('express').Router();
const shoppersCtrl = require('../controllers/shoppers');


router.get('/shoppers', shoppersCtrl.index);
router.get('/new', shoppersCtrl.new);
router.get('/:id', shoppersCtrl.show);
router.post('/', shoppersCtrl.create);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;