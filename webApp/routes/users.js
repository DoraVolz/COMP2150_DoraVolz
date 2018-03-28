var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Display text "You are cool!"" when loading /users/cool/ */
router.get('/cool', function(req, res, next){
  res.send('You are cool!');
});

module.exports = router;
