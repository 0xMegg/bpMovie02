const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

router.post(`/favoriteNumber`, (req, res) => {

    //Get favorite number from MongoDB
    Favorite.find({ 'movieId': req.body.movieId })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)

            //send number info to front
            res.status(200).json({ success: true, favoriteNumber: info.length })
        })
})

router.post(`/favorited`, (req, res) => {

    //get favorite info from DB
    Favorite.find({ 'movieId': req.body.movieId, 'userFrom': req.body.userFrom })
        .exec((err, info) => {
            if (err) return res.status(400).send(err)
            let result = false;
            if (info.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, favorited: result })
        })
})

router.post(`/addToFavorite`, (req, res) => {
    
    const favorite = new Favorite(req.body)
    favorite.save((err, doc) => {
        if (err) return res.status(400).send(err)
        return res.status(200).json({ success: true })
    })
})

router.post(`/removeFromFavorite`, (req, res) => {
    
    Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true })
        })
})

module.exports = router;
