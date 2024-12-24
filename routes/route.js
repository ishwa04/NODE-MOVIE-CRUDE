const express = require("express");
const route = express.Router();
const multer = require("multer");
const datactl = require("../controller/datactl");

const Storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null , "uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now());
    }
});

const upload = multer({storage:Storage}).single("image");

route.get("/",datactl.frist);

route.get("/addData" , datactl.addData);

route.post("/addData" ,upload, datactl.add);

route.get("/deleteData" , datactl.delete);

route.get("/editData" , datactl.edit);

route.post("/updateData" ,upload, datactl.update);

module.exports = route;