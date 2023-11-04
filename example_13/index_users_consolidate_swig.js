var express = require('express')
  , cons = require('consolidate')
  , app = express();

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var users = [];
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

app.get('/', function(req, res){
  res.render('index_swig', {
    title: 'Consolidate.js'
  });
});

app.get('/users', function(req, res){
  res.render('index_swig', {
    title: 'Users',
    users: users
  });
});

app.listen(3000);
console.log('Express server listening on port 3000');