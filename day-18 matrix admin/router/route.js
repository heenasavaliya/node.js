const express=require("express");

const route=express.Router();

const indexctl=require("../controller/adminctl");

const multer=require("../multer/multer");


route.get("/",indexctl.login);
route.post("/adminlogin",indexctl.adminlogin);
route.get("/adminlogout",indexctl.logout);
route.get("/index",indexctl.index);
route.get("/addadmin",indexctl.addadmin);
route.get("/viewsadmin",indexctl.viewsadmin);
route.post("/send" ,multer,  indexctl.adddata)
route.get("/delete",indexctl.delete);
route.get("/edit",indexctl.edit);
route.post("/update",multer,indexctl.update);





module.exports=route;

