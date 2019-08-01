var express = require('express');
var router = express.Router();
const requireAuth = require('../middlewares/requireAuthentication');

router.use(requireAuth);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
