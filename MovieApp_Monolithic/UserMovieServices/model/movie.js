// This file will have schema for movies
// we can define our schema with validation as well
// i have added only unique validation
// we can have required ... validation

const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    movieId:{type:String, unique:true},
    movieName: {type:String},
    yearRelease: {type:String},
    
});


module.exports = mongoose.model("movie", movieSchema);
