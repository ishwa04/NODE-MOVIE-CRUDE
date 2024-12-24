const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    moviename: {
        type:String,
        required: true,
    },
    rating: {
        type:String,
        required: true,
    },
    releasedate:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
});

const admin = mongoose.model("book",adminSchema);

module.exports = admin;