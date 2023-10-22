const http = require('http')

const server = http.createServer((request, respone) =>{
    respone.writeHead(220, {'Content-type':'text/plain'});
    respone.end('hello world with 200 status');
//    response.end('hello world");
})


server.listen(8000, ()=>{
    console.log("Server is ready .....")
});