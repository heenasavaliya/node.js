const express = require("express");
const catIndexCtl = require("../Controllers/categoryCtl")
const passport = require("../middleware/passportLocalSt")
const route = express.Router()
const upload = require("../multer/multer")



route.get("/addCat", catIndexCtl.addCat)
route.post("/addCat",upload, catIndexCtl.addCatData)
route.get("/viewCat", catIndexCtl.viewCat)
route.get("/catdelete",catIndexCtl.catdelete)

module.exports = route;
