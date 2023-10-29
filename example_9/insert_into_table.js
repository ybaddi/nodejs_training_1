var Sequelize = require("sequelize");
var mysql = require("mysql");
const {mysql_config} = require('./config');
console.log(mysql_config);


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
});

User.sync({force:false}).then(function(){
    console.log("table created")

    User.create({
        firstname:"John",
        lastname:"wick",
        email:"john.wick@gmail.com"
    });
    User.create({
        firstname:"John",
        lastname:"wick",
        email:"john.wick@gmail.com"
    });
    User.create({
        firstname:"John",
        lastname:"wick",
        email:"john.wick@gmail.com"
    });

});