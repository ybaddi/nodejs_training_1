var express = require('express');
var mongo = require('mongodb');
var mongoose  = require('mongoose');
//Loads the handlebars module
var handbars = require('express-handlebars');

//load connect-flash
var flash = require('connect-flash');

// load passport and session
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var myApp = express();

myApp.use(flash());


var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// add bodyparser middleware
myApp.use(bodyParser.json());
myApp.use(bodyParser.urlencoded({extended: false}));
myApp.use(cookieParser());

// set static folder
myApp.use(express.static(__dirname + '/public'));


// config express session
myApp.use(session({
   secret:'secret',
   saveUninitialized: true,
   resave: true
}));

// init passport
myApp.use(passport.initialize());
myApp.use(passport.session());

// config mongo
mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;


// set static files

// config template engine



myApp.set('views',"./views");

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
var indexRoutes = require('./routes/indexController');
var UserRoutes = require('./routes/usersController');
var authRoutes = require('./routes/authController');


myApp.use('/',indexRoutes);
myApp.use('/auth/',authRoutes);
myApp.use('/users/',UserRoutes);

// TODO 
// formulaire validation 

// 
myApp.set('port', (process.env.PORT || 3000));
myApp.listen(myApp.get('port'), function(){
    console.log("Server started on port " + myApp.get('port'));
});

