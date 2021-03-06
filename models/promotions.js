const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

require("mongoose-currency"),loadType(mongoose);

const Currency = mongoose.Types.Currency;

const promoSchema = mongoose.Schema({

    name :{
       type :String,
       required : true,
       unique : true,

    },
    image: {
        type : String,
        required : true,

    },
    label: {
        type : String,
        default : " ",
    },

    price:
    {
        type : Currency,
        required : true ,
        min :0,
    },

    description : {
        type : String,
        required : true,
    },

    featured : {
        type : Boolean,
        default : false,
    },

},

{
    timestamps : true,
}

);

const promo = mongoose.model("Promotions",promo);

module.exports = promo;
