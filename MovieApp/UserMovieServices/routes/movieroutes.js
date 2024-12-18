const express =  require("express");
const router = express.Router();

const movie = require("../model/movie");



router.post("/", async(req,res)=>{
    try {
        const {movieId, movieName, yearRelease } = req.body;
        if(!(movieId && movieName && yearRelease)) {
            res.status(400).send("All inputs are required");
        }

        const exisitngMovie = await movie.findOne({movieId});

        if(exisitngMovie){
            return res.status(409).send("Movie already exists.")
        }

        const newMovie =  await movie.create({
            movieId: movieId,
            movieName: movieName,
            yearRelease: yearRelease
        })

        res.status(201).send("Movie Saved")

    } catch (error) {
        console.log(error)
    }
});

router.get("/", ((req,res)=>{
    movie.find({}, (err, result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })

}));

module.exports = router;