var mysql = require("mysql");
const {mysql_config} = require('./config');
console.log(mysql_config);

var connexion = mysql.createConnection({
    host: mysql_config.host,
    port: mysql_config.port,
    user: mysql_config.user,
    password: mysql_config.password,
    database: mysql_config.database
});

connexion.connect(function(err){
    if(err) console.log("Mysql error: ", err);
    else{
        console.log("mysql connected with id ", connexion.threadId)
    }
});

connexion.query('select * from users',function(err, rows, fields){
    if(err) console.log("Mysql error: ", err);
    else{
        console.log("mysql result is ", rows, fields)
    }
});

connexion.end();