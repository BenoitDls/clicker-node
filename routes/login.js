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

module.exports = router;