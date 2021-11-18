const express = require('express');
const router = express.Router();
const { Favorite } =require('../models/Favorite');

router.post(`/favoriteNumber`, (req, res) => {

    //Get favorite number from MongoDB
    Favorite.find({ "movieId" : req.body.movieId })
        .exec(( err, info) => {
            if(err) return res.status(400).send(err)

            //send number info to front
            res.status(200).json({ success:true, favoriteNumber: info.length})
        })
})

module.exports = router;
