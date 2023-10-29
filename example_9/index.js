var Sequelize = require("sequelize");
var mysql = require("mysql");
const {mysql_config} = require('./config');
console.log(mysql_config);

// TODO demain
var sequelize = new Sequelize(mysql_config.database,
    mysql_config.user,
    mysql_config.password,{
    host: mysql_config.host,
    dialect : 'mysql'| 'sqlite' | 'postgre' | 'mariadb',
    pool: {
        min : 0,
        max: 5,
        idle: 10000,
    },
    storage: 'path/to/sqlite/file' // only for database sqlite
});

var sequelize = new Sequelize('progres://'+mysql_config.user+':'+mysql_config.password+
'@'+mysql_config.host+':'+mysql_config.port+'/'+mysql_config.database);