var express = require('express');
const { Mongoose } = require('mongoose');
//Loads the handlebars module
var handbars = require('express-handlebars');

var myApp = express();


// set static folder
myApp.use(express.static(__dirname + '/public'));


// config mongo
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;


// set static files

// config template engine



myApp.set('views',"./views/layouts");

//Sets handlebars configurations (we will go through them later on)
console.log(handbars.engine({
    layoutsDir: __dirname + '/views/layouts',
    }));
myApp.engine('handlebars', handbars.engine({
layoutsDir: __dirname + '/views/layouts',
}));

//Sets our app to use the handlebars engine
myApp.set('view engine', 'handlebars');
// import routes
var routes = require('./routes/usersController');

myApp.use('/users/',routes);

// TODO 
// formulaire validation 

// 
myApp.set('port', (process.env.PORT || 3000));
myApp.listen(myApp.get('port'), function(){
    console.log("Server started on port " + myApp.get('port'));
});

