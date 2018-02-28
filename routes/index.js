var express = require('express');
var router = express.Router();
var session = require('express-session');
router.use(session({
  secret: "Shh, its a secret!"
}));

function checkSignIn(req, res) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
}

/* GET home page. */
router.get('/', checkSignIn, function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;