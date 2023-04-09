const express = require("express");
const router = express.Router();
const Products = require("../schema/Product")


router.get('/',async(req,res)=>{
    try{
        const getProducts = await Products.find()
        res.json(getProducts)
    }catch(err){
        res.json({message:err.message})
    }
})

router.post('/create',async(req,res)=>{
    console.log(req.body);
    const newProduct = new Products({
        productName:req.body.productName,
        price:req.body.price
    })
    try{
        const createProduct = await newProduct.save()
        res.json(createProduct)
    }catch(err){
        res.json({message:err.message})
    }
})

module.exports = router;