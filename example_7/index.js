const express = require('express')
const {response, request} = require("express");

const moment = require('moment');

const myapp = express();

// exercice 1: url qui calcule la somme de deux entiers
myapp.get('/some_1/:number1/:number2', (req,res, next)=>{
    let some = Number(req.params.number1) + Number(req.params.number1)
    console.log("La some est" + some );
    res.send("La some est " + some );
    next();
})
myapp.get('/some_2/:number1/:number2', (req,res, next)=>{
    let some = Number(req.params.number1) + Number(req.params.number2)
    console.log("La some est " + some );
    next();
})
// exercice 2: url qui calcule la division de deux entiers (le plus grand / le plus petit)

myapp.get('/div/:n1/:n2',(req, res)=>{
    const n1= Number(req.params.n1);
    const n2= Number(req.params.n2);
    let div = n1<n2? n2/n1 : n1/n2
    res.send(`your div is ${div}` )
})


// exercice 3: url qui affiche une message "bonjour tout le monde" ou "bonsoir tout le monde selon lheur acctuel
// (l'utilisation de la fonction moment et currentTime)

myapp.get('/sayHello',(req, res)=>{
   const currentTime = moment().format('HH:mm:ss');
   console.log(currentTime);
   let hello ='';
   if(moment(currentTime,'HH:mm:ss').isBetween('04:00:00','12:00:00')){
       hello = 'bonjour';
   }else {
       hello = 'bonsoir';
   }
    res.send(`${hello} tout le monde` );
})

// exercice : url insertion dans une base de donnees mysql avec une table users (nom et prenom)

myapp.listen(8000, ()=>{
    console.log("Server is ready on port 8000 .....")
});