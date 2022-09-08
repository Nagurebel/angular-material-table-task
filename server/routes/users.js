var express = require('express');
var router = express.Router();
const userroute = require('../controllers/usercontrollers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/userdetails',userroute.getuserdata)
router.post('/addusers',userroute.createusers)
router.post('/unicuser',userroute.setunicuser)


router.get('/winner',userroute.getwinner)
module.exports = router;
