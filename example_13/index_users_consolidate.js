var express = require('express')
var myapp = express();
var consolidate = require('consolidate'); 

myapp.engine('html', consolidate.jade);
// set of views folder
myapp.set('views', './views');

// set views engine
myapp.set('view engine', 'html');

myapp.get('/', function(req,res){
    res.render('index.jade', {name:'baddi',title: 'hello', message : "how are you?"});
});


var users=[];

users.push({firstName: 'youssef', 
secondName: 'Baddi',
age:26});

users.push({firstName: 'youssef_1', 
secondName: 'Baddi_1',
age:16});

users.push({firstName: 'adil', 
secondName: 'karim',
age:36});

users.push({firstName: 'hicham', 
secondName: 'fathi',
age:46});

users.push({firstName: 'hicham_1', 
secondName: 'fathi_1',
age:14});

myapp.get('/users', function(req,res){
    res.render('users', {name:'baddi',
    title: 'hello', 
    users : users});
});
myapp.listen(8000, function(){
    console.log("server is up on 8000 ...");
});