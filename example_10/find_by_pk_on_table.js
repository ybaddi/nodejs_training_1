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
    var options = {include:{model:Post, as: 'posts'}};
    return User.findByPk(2,options);

}).then((user)=>{
    
        var posts = user.posts;
        posts.forEach((post)=>{        
            console.log("firstname "+user.get('firstname')
            + " lastname "+user.get('lastname')+
            " email "+user.get('email')+
            ' post_subject: ' + post.subject +
            ' post_content: ' + post.content );
        });
});