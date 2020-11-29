const router = require('express').Router();
const shoppersCtrl = require('../controllers/shoppers');


router.get('/shoppers', shoppersCtrl.index);
router.get('/shoppers/new', shoppersCtrl.new);
router.post('/shoppers', shoppersCtrl.create);
router.get('/shoppers/:id', shoppersCtrl.show);




function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;