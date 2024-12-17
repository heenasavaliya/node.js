const express = require("express");
const port = 8000;
const path=require("path");
const db=require("./config/db");
const cookie = require("cookie-parser")



const app= express();
app.set("view engine" ,"ejs");
app.use(express.urlencoded());
app.use(cookie())
app.use("/",require("./router/route"));
app.use(express.static(path.join(__dirname,"public")));
app.use("/uploads",express.static(path.join(__dirname,"uploads")))




app.listen(port,(err)=>{
    err ? console.log(err) : console.log("strar server" + port);
})