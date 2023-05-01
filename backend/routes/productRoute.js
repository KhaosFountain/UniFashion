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

let nextProductId = 0;
router.post('/create',async(req,res)=>{
    console.log(req.body);
    const newProduct = new Products({
        productTitle:req.body.productTitle,
        id: '' + nextProductId,
        color:req.body.color,
        url:req.body.url,
        productName:req.body.productName,
        price:req.body.price
    })
    try{
        const createProduct = await newProduct.save()
        nextProductId++
        res.json(createProduct)
    }catch(err){
        res.json({message:err.message})
    }
})


router.post('/find', async(req, res) => {
    const findProduct = new Products({
        productTitle:req.body.productTitle,
        color:req.body.color,
        productName:req.body.productName,
    })
    try {
        const find = await Products.find(findProduct);
        res.json(find);
    } catch (err) {
        res.json({ message: err.message });
    }
});


router.patch('/update/:productName',async(req,res)=>{
   
    try{
        const updateProduct = await Products.findOneAndUpdate({productName:req.params.productName},
            {productName:req.body.productName},{ new: true })
            res.json(updateProduct)
    }catch(err){
        res.json({message:err.message})
    }
})

router.delete('/delete/:productName',async(req,res)=>{
    try{
        const deleteProduct = await Products.findOneAndDelete({productName:req.params.productName},{ new: true })
            res.json(deleteProduct)
    }catch(err){
        res.json({message:err.message})
    }
})
module.exports = router;