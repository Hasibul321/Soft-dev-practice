const express = require("express");
const mongoose = require("mongoose");

const DishRouter = require("./routes/dishes");
const leaderRouter = require("./routes/leaderRouter");
const promo = require("./routes/promoRouter");
const promoRouter = require("./routes/promoRouter");

mongoose.connect("mongodb://localhost:27017/leader").then(()=>{
    console.log( "db connected");
}).catch((err)=>{
    console.log(err);
});

const app = express();
app.use(express.json());

app.use('/dishes',DishRouter);
app.use('/leaders',leaderRouter);
app.use('/promo',promo);

app.all('/',(req,res)=>{
    res.status(404).send("The requested url is not valid")
})


app.listen(4000,()=>{
    console.log("Listening to port 4000 ...");
})