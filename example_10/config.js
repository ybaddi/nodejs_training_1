var dotenv = require('dotenv');
dotenv.config();
module.exports ={
    mysql_config: {
        host: process.env.HOST,
        port : process.env.PORT,
        user: process.env.user,
        password:process.env.PASSWORD,
        database: process.env.DATABASE
    }
}