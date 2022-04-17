const express = require("express");

const leader = express.Router();

leader.route('/')

    .get((req,res)=>{
        res.send("Will send the leader to you ")
    })

    .put((req,res)=>{
        res.send("Will send the leader to you ")
    })

    .post((req,res)=>{
        res.send("Will send the leader to you ")
    })

    .delete((req,res)=>{
        res.send("Will send the leader to you ")
    })

    leader.route("/:id")
       .get((req,res)=>{
           res.status(200).send(`the requested id is : ${req.params.id}`)
       })

       .put((req,res)=>{
        res.status(300).send(`the updated id is : ${req.params.id}`)
       })

       .delete((req,res)=>{
        res.status(500).send(`the deleted id is : ${req.params.id}`)
       })





    module.exports = leader ;