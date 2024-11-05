const express = require('express');
const router = express.Router();
const trips = require('../../data/trips.json');

// Log the trips data to verify it's loading correctly
console.log(trips);

router.get('/', (req, res) => {
    res.render('home', { trips: trips.trips });
});

module.exports = router;
