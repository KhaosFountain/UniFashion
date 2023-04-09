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
    const create = new Products({
        name:req.body.name,
        price:req.body.price
    })
    try{
        const createProduct = create.save()
        res.json(createProduct)
    }catch(err){
        res.json({message:err.message})
    }
})

module.exports = router;