var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/post', function(req, res, next) {
  res.render('post');  //this is name if the ejs file we need to render to
});
router.get('/reviews', function(req, res, next) {
  res.render('review');
});

module.exports = router;
