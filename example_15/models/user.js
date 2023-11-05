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

module.exports.createUser = function(user){
    // console.log(user);
    bcrypt.genSalt(10, function(err,salt){
       bcrypt.hash(user.password, salt, function(err,hash){
            user.password=hash;
            user.save();
            // console.log(user);
       })
    });

}


module.exports.getUserByUsername = function(username){
      var query = {username: username};
      console.log("query : " + query);
      return User.findOne(query);
}


module.exports.getUserById = function(id){
    return User.findById(id);
}

module.exports.checkPassword = function(passwordToCheck, hash, callback){
    console.log("check poassword isSame  ")
    bcrypt.compare(passwordToCheck, hash, function(err,isSame){
        if(err) throw err;
        console.log("isSame : " + isSame)
        callback(err,isSame);
    })
}
