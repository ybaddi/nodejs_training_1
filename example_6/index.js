const express = require('express')
const {response, request} = require("express");

const myapp = express();


// /route/param1/param2    => params
// /route?var1=value1&var2=value2  ==> query



// const server = http.createServer((request, respone) =>{
//     respone.writeHead(220, {'Content-type':'text/plain'});
//     respone.end('hello world with 200 status');
// //    response.end('hello world");
// })


const middleware_1 = (request, response, next) => {
    console.log("midelware_1 ; " , request.url);
    next();
}

const middleware_2 = (request, response, next) => {
    console.log("midelware_2 ; " , request.url);
    next();
}

const middleware_3 = (request, response, next) => {
    console.log("midelware_3 ; " , request.url);
    next();
}

myapp.use([middleware_1,middleware_2,middleware_3])

myapp.get('/', (req,res, next)=>{
    console.log("requet recieved")
    res.send('my first get express response');
    // res.write('hello world from express');
   next();
})


myapp.all('/all', (req,res, next)=>{
    console.log("requet recieved")
    // console.log(req.method);
    res.send('my first all express response');
    // res.write('hello world from express');
    next();
})

myapp.get('/ab?cd', (req,res, next)=>{
    console.log("requet recieved")
    // console.log(req.method);
    res.send('my first regex_1 express response');
    // res.write('hello world from express');
    next();
})

// myapp.get('/ab*', (req,res, next)=>{
//     console.log("requet recieved")
//     // console.log(req.method);
//     res.send('my first regex express response');
//     // res.write('hello world from express');
//     next();
// })


myapp.get('/home', (req,res, next)=>{
    console.log("requet recieved")
    res.send('my first get express response home page');
    // res.write('hello world from express');
    next();
})

myapp.get('/contactus', (req,res, next)=>{
    console.log("requet recieved")
    res.send('my first get express response contact page');
    // res.write('hello world from express');
    next();
})

myapp.post('/', (req,res, next)=>{
    console.log("requet recieved")
    res.send('my first post express response');
    // res.write('hello world from express');
    next();
})

myapp.post('/home', (req,res, next)=>{
    console.log("requet recieved")
    res.send('my first post express response home page');
    // res.write('hello world from express');
    next();
})

myapp.post('/contactus', (req,res, next)=>{
    console.log("requet recieved")
    res.send('my first post express response contact page');
    // res.write('hello world from express');
    next();
})

// myapp.get('/*', (req,res, next)=>{
//     console.log("requet recieved")
//     res.send('my first get express response default path');
//     // res.write('hello world from express');
//     next();
// })
//
// myapp.post('/*', (req,res, next)=>{
//     console.log("requet recieved")
//     res.send('my first post express response default path');
//     // res.write('hello world from express');
//     next();
// })


myapp.get('/calcule', (req,res, next)=>{
    console.log("requet recieved")
    res.send(`my first get express response calcule page of ${req.query['prenom']} ${req.query['nom']} ` );
    // res.write('hello world from express');
    next();
})


myapp.get('/calcule_1', (req,res, next)=>{
    console.log("requet recieved")
    res.send(`my first get express response calcule page of ${req.query.prenom} ${req.query.nom} ` );
    // res.write('hello world from express');
    next();
})

myapp.get('/calcule_2', (req,res, next)=>{
    console.log("requet recieved")
    res.send(`my first get express response calcule page of ${req.query.jours} ` );
    // res.write('hello world from express');
    next();
})

myapp.get('/calcule_3', (req,res, next)=>{
    console.log("requet recieved")
    res.type('html')
        .send(`my first get express response calcule page of ${req.query.personne.nom} ${req.query.personne.prenom} ` );
    // res.write('hello world from express');
    next();
})


myapp.get('/calcule_4/:prenom/:nom', (req,res, next)=>{
    console.log("requet recieved")
    res.set('Content-Type','text/plain')
        .send(`my first get express response calcule page of ${req.params.prenom} ${req.params.nom} ` );
    // res.write('hello world from express');
    next();
})

myapp.get('/calcule_5/:prenom?/:nom?', (req,res, next)=>{
    console.log("requet recieved")
    res.type('html')
        .send(`my first get express response calcule page of ${req.params['prenom']} ${req.params['nom']} ` );
    // res.write('hello world from express');
    next();
})

// response a type of json
myapp.get('/calcule_6/:prenom?/:nom?', (req,res, next)=>{
    console.log("requet recieved")
    res.type('json')
        .send({prenon: req.params['prenom'],
            prenom: req.params['nom'] } );
    // res.write('hello world from express');
    next();
})


// TODO exampel with sending a file
myapp.get('/htmlhome', (req,res)=>{
    console.log("requet recieved")
    res.type('html')
        .sendFile(__dirname + '/home.html' );
    // res.write('hello world from express');
    // next();
})
myapp.get('/*', (req,res)=>{
    console.log("requet recieved")
    res.status(404).send("not found")
})

myapp.post('/*', (req,res, next)=>{
    res.status(404).send("not found")
})

myapp.listen(8000, ()=>{
    console.log("Server is ready on port 8000 .....")
});