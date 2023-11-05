var express = require('express');

var router = express.Router();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var User = require('../models/user');

// TODO add auth midelware

function verifyAuthentication(req,res,next){
    if(req.isAuthencated()) {
        return next();
    }else{
        res.redirect('/user/login');
    }
}

// routes
router.get('/',verifyAuthentication, function(req,res){
     res.render('index');
}
)

router.get('/login',function(req,res){
    req.flash('message', 'Welcome to Blog');
res.render('login')
}
)


passport.use(new LocalStrategy(
    function(username, password, done) {
User.getUserByUsername(username).then((user)=>{
    // console.log(err);
    console.log("user is: " + user);
    // if (err) return done(null,false,{message:"Error"});
    if(!user){
        return done(null,false,{message:"User not found"});
    }
    User.checkPassword(password, user.password, function(err, isMatch){
        if(err) {console.log(err); throw err;}
        if(isMatch){console.log("is match");return done(null,user); }
        else{ console.log("not match");return done(null,false,{message:"Invalid password"});}
    });

    // Serialise user with passport
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        // TODO get user by id 
        User.getUserById(id).then((err,user)=>{
            done(err,user);
        });
    });

} ).catch((err)=>{
    console.log("eror + " + err)
});
    }
));


router.post('/login',
passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect: '/auth/login',
    failureFlash: true
})
,function(req,res){
//  TODO check login
// console.log('check login');
req.flash('success', "succes login");
req.login((err)=>{
    console.log("login");
})
res.redirect('/');
}
)


router.get('/logout',function(req,res){
//  TODO check login
// console.log('check login');
req.logout(()=>{res.redirect('/auth/login');});
}
)



module.exports = router