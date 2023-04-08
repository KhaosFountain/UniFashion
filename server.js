const express = require('express')
const app = express()
const { default: mongoose } = require("mongoose")
const bodyParser = require('body-parser')



//mongoose.connect('mongodb+srv://RStephens:focusup@cluster0.huesiav.mongodb.net/?retryWrites=true&w=majority')
const db = mongoose.connection
app.use(bodyParser.urlencoded({extended: false}))

db.on('error',(error)=> console.error(error))
db.once('open',()=> console.error('Connected to database'))
app.listen(3000,()=> console.log('Server Started'))