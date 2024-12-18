const express = require("express")

const app = express();

app.use(express.json());

app.use("/", (req,res,next)=>{
    return res.status(200).json({"msg": "Hell from Shopping"})
})

app.listen(8003,()=>{
    console.log(`Shopping Service is listening on port 8003`)
})