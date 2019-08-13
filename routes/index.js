//Index Page 
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//Main router through express
var express = require('express');
var router = express.Router();
var survey = require('./controller/survey');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DSA Survey Center' });
});

/* GET view survey page. */
router.get('/viewsurvey', function(req, res, next) {
  res.render('viewsurvey');
});

/* GET create survey page. */
router.get('/createsurvey', function(req, res, next) {
  res.render('createsurvey');
});

router.post('/createsurvey', survey.createSurvey);



module.exports = router;
