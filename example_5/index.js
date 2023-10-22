const express = require('express')
const {response} = require("express");

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

myapp.post('/', (req,res, next)=>{
    console.log("requet recieved")
    res.send('my first post express response');
    // res.write('hello world from express');
    next();
})



myapp.listen(8000, ()=>{
    console.log("Server is ready on port 8000 .....")
});