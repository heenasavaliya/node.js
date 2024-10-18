
const mongoose = require("mongoose");


const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publicationDate: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const admin = mongoose.model("book",schema);

 module.exports = admin;