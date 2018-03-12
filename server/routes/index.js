var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({});
});

/* POST create user */
router.post('/user', function(req, res, next) {
  // fake logic to create user
  // req.password is prob plain text whoopsies
  // something along the lines of...models.User.create({})....
  res.json({
    success: true, 
    user: {
      id: 1234213, 
      first_name: req.body.first_name, 
      last_name: req.body.last_name, 
      bank: req.body.bank
    }
  });
});

router.get('/estimate_savings', function(req, res, next) {
  //hit some helper to calculate estimated savings with bridgit given rough params
  res.json({
    estimated_savings: 400
  });
});


module.exports = router;
