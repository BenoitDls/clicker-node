var express = require('express');
const User = require('../models/User');
var router = express.Router();
var session = require('express-session');
router.use(session({
    secret: "Shh, its a secret!"
}));

router.get('/', function (req, res, next) {
    res.render('signup', {
        title: 'Signup'
    });
});

router.post('/', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    var small = new User({
        username: 'username',
        password: 'password'
    });
    small.save(function (err) {
        if (err) {
            return handleError(err)
        } else {
            res.redirect('/login');
        }

    })
})

module.exports = router;