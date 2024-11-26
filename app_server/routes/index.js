const express = require('express');
const router = express.Router();
const trips = require('../../data/trips.json'); // Ensure the correct path

// Log trips data for debugging
console.log('Loaded trips:', trips);

// Handle the root route
router.get('/', (req, res) => {
    try {
        res.render('home', { trips: trips.trips });
    } catch (error) {
        console.error('Error rendering trips:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;

