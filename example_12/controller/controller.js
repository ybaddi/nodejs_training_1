const model = require("../models/models")

const User = model.User;
const Post = model.Post


exports.findAll= (req,res) =>{
        var options = {include:{model:Post, as: 'posts'}};
        User.findAll(options).then((data)=>{
            res.send(data);
        })
          
    }

exports.create= (req,res) =>{
    console.log(req);
    User.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email
    }).then((data)=>{
res.send(data);
    })
          
    }