const express = require("express")
const {PORT} = require("./config")
const {databseConnection} = require("./database");
const expressApp = require("./express-app")

const startServer = async ()=>{
    const app = express();
    await databseConnection();
    await expressApp(app);
    app.listen(PORT, ()=>{
        console.log(`Listening to port ${PORT}`)
    })
    .on('error',(err)=>{
        console.log(err);
        process.exit();
    })
}
startServer();