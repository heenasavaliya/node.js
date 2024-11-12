const express = require("express");
const port = 1050;

const app = express();
const path = require("path")

app.set("view engine" , "ejs");

app.use("/",require("./routes/route"))

app.use(express.static(path.join(__dirname,"public")))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("port started" + port)
})