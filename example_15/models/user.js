var mongoose =require('mongoose')

var bcrypt = require('bcryptjs')

var userschema = mongoose.Schema({
    username:{
        type:String,
        index:true,
    },
    password:{
        type:String,
    },
    firstname:{
        type:String,
    },
    secondname:{
        type:String,
    },
    email:{
        type:String,
    },
})

var User = module.exports = mongoose.model('User',userschema);

createUser = function(user,callback){
    bcrypt.genSalt(10, function(err,salt){
       bcrypt.hash(user.password, salt, function(err,hash){
            user.password=hash;
            user.save(callback);
       })
    });

}

// TODO
// getUserByUserName


// TODO
// getUserById

// TODO
// checkPassword()
