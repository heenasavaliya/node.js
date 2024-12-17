const addCatSchema = require("../model/addCatSchema")
const fs = require("fs");


module.exports.addCat = (req,res) =>{
    res.render("addCat")
}
  
module.exports.viewCat = (req,res) =>{
    res.render("viewCat")
}

module.exports.addCatData =async(req,res) =>{
 
    
    // req.body.image =  req.file.path
    req.body.image = "/uploads/" + req.file.filename;
    let data = await addCatSchema.create(req.body)
    data && res.redirect("/viewCat")

    console.log(req.body)
}

module.exports.viewCat = async(req,res)=>{
    let data = await addCatSchema.find({})
    data && res.render("viewCat",{data})
}

module.exports.catdelete = async(req,res)=>{
    let singleData = await addCatSchema.findById(req.query.id)
    console.log(singleData)
    fs.unlinkSync(singleData.image)
    let deleteRecord = await addCatSchema.findByIdAndDelete(req.query.id)
    deleteRecord && res.redirect("/viewcat")
}