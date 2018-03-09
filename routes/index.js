var express = require('express');
var router = express.Router();
var session = require('express-session');

function checkSignIn(req, res, next) {
  if (req.session.isConnected) {
    return next();
  } else {
    res.redirect('/login')
  }
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;