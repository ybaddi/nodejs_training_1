var express = require('express')
var router = express.Router()


var User = require('../models/user');

// TODO 
// add a auth middelware

router.get('/register',function(req,res){
    res.render('register');
}
)

module.exports = router