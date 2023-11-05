var express = require('express')

var router = express.Router();


// TODO add auth midelware

function verifyAuthentication(req,res,next){
    if(req.isAuthenticated()) {
        return next();
    }else{
        res.redirect('/auth/login');
    }
}

// routes
router.get('/',verifyAuthentication, function(){

}
)

// router.get('/login',auth,function(){

// }
// )

// router.get('/register',auth,function(){
    
// }
// )

// router.post('/login',auth,function(){

// }
// )

// router.post('/register',auth,function(){
    
// }
// )

module.exports = router