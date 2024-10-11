const express = require("express")
const port = 2498;

const path = require("path");

const app = express();

app.set("view engine" , "ejs");

app.use(express.urlencoded());

app.use("/public",express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/gallery-single",(req,res)=>{
    res.render("gallery-single")
})

app.get("/gallery",(req,res)=>{
    res.render("gallery")
})

app.get("/services",(req,res)=>{
    res.render("services")
})

app.get("/starter-page",(req,res)=>{
    res.render("starter-page")
})


app.listen(port,(err) =>{
    err ? console.log(err) : console.log("port started" + port)
})