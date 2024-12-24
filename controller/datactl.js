const { query } = require("express");
const admin = require("../model/schema");
const fs = require("fs");

module.exports.frist = async (req, res) => {
    const data = await admin.find();
    res.render("index", { data });
};

module.exports.addData = (req, res) => {
    res.render("add");
};

module.exports.add = async (req, res) => {
    req.body.image = req.file.path;
    const data = await admin.create(req.body);
    data && res.redirect("/");
};

module.exports.delete = async (req, res) => {
        let singleRecord = await admin.findById(req.query.id);
        fs.unlinkSync(singleRecord.image); // Safely delete the image file
        const data = await admin.findByIdAndDelete(req.query.id);
        data && res.redirect("/");
};

module.exports.edit = async (req, res) => {
    const data = await admin.findById(req.query.id);
    data && res.render("edit", { data });
};

module.exports.update = async (req, res) => {
        let singleData = await admin.findById(req.body.id);
        let img = "";
        req.file ? (img = req.file.path): (img = singleData.image)
        req.file && fs.unlinkSync(singleData.image);
        req.body.image = img ;
        let update = await admin.findByIdAndUpdate(req.body.id , req.body);
        update && res.redirect("/");
};
