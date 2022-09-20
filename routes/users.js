var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')
  
let UserSchema = mongoose.Schema({
  GameName:String,
  review:String
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
module.exports = mongoose.model('user',UserSchema)

mongoose.connect('mongodb://localhost/GamingForum')
.then(function(){
  console.log('database connceted')
})
.catch(function(){
  console.log(e)
})
