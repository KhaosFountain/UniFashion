const express = require('express')
const app = express()
const { default: mongoose } = require("mongoose")
const bodyParser = require('body-parser')



mongoose.connect('mongodb+srv://UniFashion:Fashion@cluster0.dylj4xi.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection
app.use(bodyParser.json())

db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))


const productRouter = require("./backend/routes/productRoute")
app.use('/products',productRouter)

app.use((req,res,next)=>{
    res.status(401).send('NOT_FOUND');
  })
app.listen(3000,()=> console.log('Server Started'))