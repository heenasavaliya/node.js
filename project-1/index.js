const express = require("express")
const port = 2005;
const path = require("path")

const app = express();

app.set("view engine" , "ejs")

app.use(express.urlencoded({extended:true}))
app.use("/public",express.static(path.join(__dirname,"public")))

let students = [
  {
    id : 1,
    name : "heena",
    subject : "eng",
    city : " ahm",
  },
  {
    id : 2,
    name : "riva",
    subject : "guj",
    city : "surat",
  },
  {
    id : 3,
    name : "ayushi",
    subject : "hindi",
    city : "rajkot",
  },
  {
    id : 4,
    name : "meghna",
    subject : "eng",
    city : " ahm",
  },
  {
    id : 5,
    name : "yanshi",
    subject : "guj",
    city : "guj",
  }
]

app.get("/",(req,res) =>{
    res.render("index",{students})
})

app.post("/insert",(req,res)=>{
  req.body.id = students.length + 1
  students.push(req.body);
  res.redirect("back")
})

app.get("/delete" ,(req,res) =>{
  let data = students.filter((item)=>
  item.id != req.query.Id)
  students = data
  res.redirect("back")
})

app.get("/edit/:id",(req,res) =>{
  let singleData = students.find((item) => item.id == req.params.id);
  singleData && res.render("edit", {singleData})
})

app.post("/update", (req,res) => {
  students.map((e,i)=>{
     if (e.id == req.body.id){
      e.id = req.body.id, 
      e.name = req.body.name,
      e.subject = req.body.subject,
      e.city = req.body.city
     }else{
      e
     }
  })
  res.redirect("/")
})

app.listen(port ,(err) => {
  err ? console.log(arr) : console.log("post started" + port) })