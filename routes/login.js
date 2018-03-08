var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login', {
        title: 'Login'
    });
});

router.post('/', function (req, res) {
    let username
    let password

    if (req.body.username) {
        username = req.body.username
        if (req.body.password) {
            password = req.body.password
            
            User.find({
                'username': username
            }, function (err, user) {
                console.log(user)
                if (user && password == user[0].password) {
                    req.session.id = user._id
                    req.session.username = user.username
                    req.session.isConnected = true
                    res.redirect('/')
                } else {
                    res.redirect('/login')
                }
            })
        } else {
            res.redirect('/login')
        }
    } else {
        res.redirect('/login')
    }
})


module.exports = router;