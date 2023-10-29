var Sequelize = require("sequelize");
var mysql = require("mysql");
const {mysql_config} = require('./config');
console.log(mysql_config);


// users (id,firstname,lastname,mail)
// users-posts (id, userid, subject,content)


var sequelize = new Sequelize('mysql://'+mysql_config.user+':'+mysql_config.password+
'@'+mysql_config.host+':'+mysql_config.port+'/'+mysql_config.database);


var userParams = {firstname:"John",lastname:"wick",email:"john.wick@gmail.com"}
var post_1_Params = {subject:"post1",content:"content of post 1"}
var post_2_Params = {subject:"post2",content:"content of post 2"}
var post_3_Params = {subject:"post3",content:"content of post 3"}
var user;
var post1;
var post2;
var post3;
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

    return User.create({
        firstname:"John",
        lastname:"wick",
        email:"john.wick@gmail.com"
    });
    

}).then((u)=>{user=u})
.then(()=>{return Post.create(post_1_Params);})
.then((p)=>{post1=p})
.then(()=>{return Post.create(post_2_Params);})
.then((p)=>{post2=p})
.then(()=>{return Post.create(post_3_Params);})
.then((p)=>{post3=p})
.then(()=>{user.setPosts([post1,post2,post3])})
.then(function(){
    console.log("data added");
});