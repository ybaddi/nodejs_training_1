const express = require('express')

const myapp = express();

// const server = http.createServer((request, respone) =>{
//     respone.writeHead(220, {'Content-type':'text/plain'});
//     respone.end('hello world with 200 status');
// //    response.end('hello world");
// })


myapp.get('/', (req,res)=>{
    res.write('my first get express response');
    res.write('hello world from express');
    res.end();
})


myapp.post('/', (req,res)=>{
    res.write('my first post express response');
    res.write('hello world from express');
    res.end();
})


myapp.listen(8000, ()=>{
    console.log("Server is ready on port 8000 .....")
});