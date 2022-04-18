const express = require("express")

const dish = express.Router();

dish.route('/')
    .get((req,res)=>{
        res.send("dish router get")
    })
    .post((req,res)=>{
        res.send("dish router post")
    })
    .put((req,res)=>{
        res.send("dish router put")
    })
    .delete((req,res)=>{
        res.send("dish router delete")
    }) 
dish.route('/:id')
    .get((req,res)=>{
        res.status(200).send(`The req id is: ${req.params.id}`)
    })
    .put((req,res)=>{
        res.send(`The updated id is: ${req.params.id}`)
    })
    .delete((req,res)=>{
        res.status(300).send(`The deleted id is: ${req.params.id}`)
    })
    
    



module.exports = dish;