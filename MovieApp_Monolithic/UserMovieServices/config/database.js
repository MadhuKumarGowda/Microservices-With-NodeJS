// This file will have database connection details
// currently its pointing to local database

const mongoose = require("mongoose");

const {MONGO_URI} = process.env;

exports.connect = ()=>{
    mongoose.connect('mongodb://localhost:27017/UserMovies',{

    }).then(()=>{
        console.log("Successfully connected to Movie Database !!!");
    }).catch((error)=>{
        console.log("Database Connection Failed ... Exiting Now");
        console.log(error)
        process.exit(1);
    })
}

