const express = require('express')
const app = express()
const { default: mongoose } = require("mongoose")
const bodyParser = require('body-parser')



mongoose.connect('mongodb+srv://UniFashion:Fashion@cluster0.dylj4xi.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection
app.use(bodyParser.urlencoded({extended: false}))

db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))


const productRouter = require("./backend/routes/productRoute")
app.use('/products',productRouter)





app.listen(3000,()=> console.log('Server Started'))