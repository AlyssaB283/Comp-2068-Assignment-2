//Users page
//Contributers: Shyla Grantmyre, Schevene Singh, Alyssa Brown, Liam Edwards
//DSA Survey Site
//Routes through the users and calls the middleware to ensure they are authenticated
var express = require('express');
var router = express.Router();
const requireAuth = require('../middlewares/requireAuth');

router.use(requireAuth);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
