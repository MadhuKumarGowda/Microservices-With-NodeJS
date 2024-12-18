// This file will have schema for users
// we can define our schema with validation as well
// i have added only unique validation
// we can have required ... validation

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:String, unique:true},
    username: {type:String},
    password: {type:String},
    watchlist: {type:Array},
    
});


module.exports = mongoose.model("user", userSchema);
