var express = require('express')
var router = express.Router()


var User = require('../models/user');




// TODO 
// add a auth middelware

router.get('/register',function(req,res){
    // console.log(req.body);
    res.render('register');
}
)

router.post('/register',function(req,res){
    // console.log(req);
    var username = req.body.username;
    var firstname = req.body.firstname;
    var secondname=req.body.secondname;
    var email=req.body.email;
    var password= req.body.password;
    var password2=req.body.password2;

    // data validation

    // create the user
    var newUser = new User({
        username:username,
        password:password,
        firstname:firstname,
        secondname:secondname,
        email:email
    });
    // console.log(newUser);
    User.createUser(newUser);

    // TODO redirect to login url
    res.redirect('/');
    })


module.exports = router