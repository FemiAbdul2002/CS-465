const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips'); // Ensure the path is correct

router.get('/trips', tripsController.getAllTrips);
router.get('/trips/:id', tripsController.getTripById);

module.exports = router;
