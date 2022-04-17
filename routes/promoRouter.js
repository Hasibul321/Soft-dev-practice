const express = require("express")

const promo = express.Router();

promo.route('/')
    .get((req,res)=>{
        res.send("Will send all the promotions to you")
    })

    .put((req,res)=>{
        res.send("Updating all the promotions ");

    })

    .post((req,res)=>{
        res.send('Will add the item ')
    })

    .delete((req,res)=>{
        res.send("Will delete all the promotions") ;
    })

    promo.route("/:id")
      .get((req,res)=>{
          res.status(200).send(`The added id is ${req.params.id}` )
      })
      .put((req,res)=>{
        res.status(300).send(`The updated id is ${req.params.id}` )
    })

    .delete((req,res)=>{
          res.status(400).send(`The deleted id is ${req.params.id}` )
      })


    module.exports = promo;