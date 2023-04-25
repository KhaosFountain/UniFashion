const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
})

const Users = Mongoose.model("users", UserSchema)
module.exports = Users