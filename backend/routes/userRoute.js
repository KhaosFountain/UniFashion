const express = require("express");
const router = express.Router();
const Users = require("../schema/user")
const bcrypt = require("bcryptjs")


router.post('/signup',async(req,res)=>{
    const user = new Users({
        username:req.body.username,
        password:req.body.password
    })
    try{
        const newUser = await user.save()
        res.json(newUser)
    }catch(err){
       res.json({message:err.message})
    }
})

router.post('/signin', async(req,res)=>{
    try{
        const existing = await Users.findOne({username:req.body.username})
        if(existing){
          // if(req.body.password == existing.password){
            res.json(existing)
        //   }
        }
    }catch(err){
        res.json({message:err.message})
    }
})

module.exports = router;