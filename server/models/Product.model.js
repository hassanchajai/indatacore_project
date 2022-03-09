
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please fill the product name"]
    },
    price:{
        type:Number,
        required:[true,"Please fill the product price"]
    },
    tva:{
        type:Number,
        required:[true,"Please fill the product tva"]
    },
    active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

