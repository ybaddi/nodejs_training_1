var Sequelize = require("sequelize");
var mysql = require("mysql");
const {mysql_config} = require('../config');
console.log(mysql_config);


// users (id,firstname,lastname,mail)
// users-posts (id, userid, subject,content)


var sequelize = new Sequelize('mysql://'+mysql_config.user+':'+mysql_config.password+
'@'+mysql_config.host+':'+mysql_config.port+'/'+mysql_config.database);

var User = sequelize.define('user',{
    firstname:{
        type: Sequelize.STRING,
        field: 'first_name'
    },
    lastname:{
        type: Sequelize.STRING,
        field: 'last_name'
    },
    email:{
        type: Sequelize.STRING,
        field: 'email'
    }
},{freezTableName:true});

var Post = sequelize.define('user-posts',{
    subject:{
        type: Sequelize.STRING,
        field: 'subject'
    },
    content:{
        type: Sequelize.TEXT,
        field: 'content'
    }
},{freezTableName:true});

Post.belongsTo(User);
User.hasMany(Post,{as:'posts'});

User.sync({force:false}).then(function(){
    Post.sync({force:false});
})
// promise if two table created
.then(()=>{
    console.log("tables created")
})


const findAll = function findAll(){
    return User.sync({force:false}).then(function(){
        Post.sync({force:false}).then(()=>{
            var options = {include:{model:Post, as: 'posts'}};
            return User.findAll(options);
        })
    })
}

module.exports={
    User: User,
    Post: Post
}