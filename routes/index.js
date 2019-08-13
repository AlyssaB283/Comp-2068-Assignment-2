//Index Page 
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//Main router through express
var express = require('express');
var router = express.Router();
var surveys = require('./controller/survey');

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

router.get('/surveys', surveys.getSurveys);
router.get('/surveys/:id', surveys.getSurveyById('surveys/details'));
router.get('/surveys/:id/edit', surveys.getSurveyById('surveys/edit'));
router.post('/surveys/:id/edit', surveys.updateSurveyById);
router.get('/surveys/:id/delete', surveys.deleteSurveyById);

router.post('/createsurvey', surveys.createSurvey);



module.exports = router;
