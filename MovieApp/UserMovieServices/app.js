require("dotenv").config();
require("./config/database").connect();

const userRouter = require("./routes/userroutes");
const movieRouter = require("./routes/movieroutes");
const express = require("express")
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json())

app.use("/user", userRouter);
app.use("/movie", movieRouter);

const port = process.env.PORT || 4001;

app.listen(port, ()=>{
    console.log(`Server Running Port ${port}`)
})




