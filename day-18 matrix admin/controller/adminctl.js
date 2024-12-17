const admin = require("../model/schema");
const schema =require("../model/schema");
const fs=require("fs");


module.exports.login=(req,res)=>{
    res.render("login")

}


module.exports.adminlogin= async(req,res)=>{
    let admin = await schema.findOne({"email":req.body.email})
    if (!admin) {
        return console.log("user not found");
    }
    if (req.body.password==admin.password){
        res.cookie("adminData",admin)
        res.redirect("/index")
    }

}

module.exports.logout=(req,res)=>{
    res.clearCookie("adminData")
    res.redirect("/")
}

module.exports.index=(req,res)=>{
    let admin = req.cookies.adminData
    admin ? res.render("index") : res.redirect("/");
}

module.exports.addadmin=async(req,res)=>{
   if (req.cookies.adminData) {
   let data = await schema.find({})
   data && res.render("addadmin");
   }else{
        res.redirect("/")
   }
}
module.exports.viewsadmin= async(req,res)=>{
    if (req.cookies.adminData){
        let data = await schema.find({});
        data&& res.render("viewsadmin",{data})
    }else{
        res.redirect("/");
        
    }
}
module.exports.adddata = async (req,res)=>{ 
    req.body.image=req.file.path
    let data = await schema.create(req.body)
    data&&res.redirect("addadmin")
}
module.exports.delete = async (req,res)=>{
    let singledata= await  schema.findById(req.query.id) 
    fs.unlinkSync(singledata.image);
    let data=await schema.findByIdAndDelete(req.query.id)
    data&&res.redirect("viewsadmin");
}
module.exports.edit = async (req,res)=>{
   let data = await schema.findById(req.query.id)
   data&&res.render("edit",{data});

}
module.exports.update = async (req,res)=>{
    let img = ""
    let singledata= await schema.findById(req.body.id);
    req.file ? img = req.file.path : img=singledata.image
    req.file && fs.unlinkSync(singledata.image)
    req.body.image=img
    let data = await schema.findByIdAndUpdate(req.body.id, req.body);
    data&&res.redirect("/viewsadmin");
}

