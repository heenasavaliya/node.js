
const mongoose = require("mongoose");


const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
})

const admin = mongoose.model("firstSchema",schema);

 module.exports = admin;