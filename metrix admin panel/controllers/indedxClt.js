const adminSchema = require("../model/adminSachema")

module.exports.login = (req,res) =>{
    res.render("login")
}

module.exports.loginAdmin = async(req,res)=>{
    let admin = await adminSchema.findone({"email":req.body.email});
    if(!admin){
        return console.log("user not found")
    }
    if(req.body.password == admin.password){
        res.cookie("adminData",admin);
        res.redirect("/dashboard")
    }
}

module.exports.logout = (req,res)=>{
    res.clearCookie("adminData");
    res.redirect("/");
}

module.exports.dashboard = (req,res)=>{
    let admin = req.cookies.adminData
    admin ? res.render("dashboard") : res.redirect("/");
}

module.exports.addAdmin = (req,res)=>{
    let admin = req.cookies.adminData
    admin ? res.render("addAdmin") : res.redirect("/")
}


module.exports.viewAdmin = async (req,res)={
  




