const multer=require("multer");

const ImageStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname +'-'+Date.now())
    }

})

const uploads =multer({storage:ImageStorage}).single("image")

module.exports =uploads