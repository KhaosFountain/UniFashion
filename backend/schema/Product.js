const Mongoose = require("mongoose")
const ProductSchema = new Mongoose.Schema({
    productName:{
        type:String,
        unique:true,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
})

const Products = Mongoose.model("product",ProductSchema)
module.exports = Products