const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    email :{
        type:String,
        required:true
    },

    password :{
        type:String,
        required:true
    },

})

const admin = mongoose.model("AdminPanel",Schema)

module.exports = admin