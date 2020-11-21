const passport = require('passport');
const shopper = require('../models/shopper');
const Shopper = require('../models/shopper');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb){

    Shopper.findOne({ googleId: profile.id }, function(err, shopper) {
        if(err) return cb(err);
        if(shopper) {
            return cb(null, user)
        } else {
            const newShopper = new Shopper({
                name: profile.displayName, 
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newShopper.save(function(err) {
                if(err) return cb(err);
                return cb(null, shopper);
            });
        };
    });
}));

passport.serializeUser(function(shopper, done) {
    done(null, shopper);
});

passport.deserializeUser(function(id, done) {
    shopper.findById(id, function(err, shopper) {
        done(err, shopper)
    });
});