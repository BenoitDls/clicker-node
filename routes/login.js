var express = require('express');
const User = require('../models/User');
var router = express.Router();
var session = require('express-session');
router.use(session({
    secret: "Shh, its a secret!"
}));


router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Login'
    });
});

function authenticate(name, pass, fn) {
    db.User.findOne({
        username: name
    }, function (err, user) {
        if (!user) return fn(new Error('cannot find user'));
        hash(pass, user.salt, function (err, hash) {
            if (err) return fn(err);
            if (hash == user.hash) return fn(null, user);
            fn(new Error('invalid password'));
        })
    })
}

router.post('/', function (req, res) {
    authenticate(req.body.username, req.body.password, function (err, user) {
        if (user) {
            req.session.regenerate(function () {
                req.session.user = user;
                res.redirect('back');
            });
        } else {
            res.redirect('login');
        }
    });
});

module.exports = router;