const express =  require("express");
const jwt = require("jsonwebtoken")
const router = express.Router();

const user = require("../model/user")
let TOKEN_KEY = "gfg_JWT_SECRETKEY";

router.post("/", async(req,res)=>{
    try {
        const {email, username, password, watchlist } = req.body;
        if(!(email && username && password && watchlist)){
            res.send(400).status("All inputs are required...")
        }

        const existUser = await user.findOne({email});
        if(existUser){
            res.status(409).send("User already exists.")
        }

        const newUSer =  await user.create({
            email:email,
             username:username, 
             password:password, 
             watchlist:watchlist
        })

        let data = {
            time: Date(),
            userId:12
        }

        const token = jwt.sign(data, TOKEN_KEY);
        user.token = token;
        res.status(201).send(token);
    } catch (error) {
        console.log(error)        
    }
});

router.get("/", async(req,res)=>{
   const data = await user.find()
        if(!data){
            res.send("No user available")
        }else{
            res.send(data)
        }
    });



module.exports = router;