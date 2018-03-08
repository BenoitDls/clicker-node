var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('signup', {
        title: 'Signup'
    });
});

router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    //On vérifie si un utilisateur existe déjà
    User.find({
        'username': username
    }, function (err, user) {
        if (user[0]) {
            res.redirect('/signup')
            console.log('Le nom d\'utilisateur existe déjà')
        } else {
            //on vérifie si le mot de passe existe déjà
            User.find({
                'password': password
            }, function (err, pass) {
                if (pass[0]) {
                    res.redirect('/signup')
                    console.log('Le mot de passe existe déjà')
                } else {
                    var small = new User({
                        username: username,
                        password: password
                    });
                    small.save(function (err) {
                        if (err) {
                            return handleError(err)
                        } else {
                            res.redirect('/login');
                        }
                    })
                }
            });
        }
    });
})

module.exports = router;