var express = require("express");
var models = require("./models/models");
var controller = require("./controller/controller")

const myapp = express();

myapp.use(express.json());

myapp.get("/users",(req,res) =>{
    var users = []
    models.User.findAll().then((us)=>{
        users = us;
        console.log(users);
        res.send(users);
    });   
     
});

myapp.get("/users_1",controller.findAll);

myapp.post("/users_1",controller.create);


myapp.listen(8000, ()=>{
    console.log("Server is ready on port 8000 .....")
});

