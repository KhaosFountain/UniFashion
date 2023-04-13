const Mongoose = require("mongoose")
const ProductSchema = new Mongoose.Schema({
    productTitle:{
        type:String,
    },
    color:{
        type:String,
    },
    url:{
        type:String,
    },
    id:{
        type:Number,
    },
    productName:{
        type:String,
        unique:true,
    },
    price: {
        type:Number,
        required:true,
    },
})

const Products = Mongoose.model("product",ProductSchema)
module.exports = Products