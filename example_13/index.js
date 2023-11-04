var express = require('express')
var myapp = express();
var jade = require('jade'); //optionnal

// set of views folder
myapp.set('views', './views');

// set views engine
myapp.set('view engine', 'jade');
myapp.get('/', function(req,res){
    res.render('index.jade', {name:'baddi',title: 'hello', message : "how are you?"});
});


myapp.listen(8000, function(){
    console.log("server is up on 8000 ...");
});