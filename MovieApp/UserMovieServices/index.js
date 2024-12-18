const http = require("http")
const app = require("./app")
const server = http.createServer(app);
const userRouter = require("./routes/userroutes");
const movieRouter = require("./routes/movieroutes");

const route = require("./app");

const port = process.env.PORT || 4001;

server.listen(port, ()=>{
    console.log(`Server Running on port ${port}`)
})