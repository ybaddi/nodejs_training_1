const express = require('express')
const {response, request} = require("express");

const myapp = express();

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

myapp.listen(8000, ()=>{
    console.log("Server is ready on port 8000 .....")
});