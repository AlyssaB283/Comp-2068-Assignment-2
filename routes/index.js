//Index Page 
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//Main router through express
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
