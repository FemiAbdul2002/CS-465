// Import trips data
const tripsData = require('../../data/trips.json');
const trips = tripsData.trips; // Access the "trips" array within the data object

// Controller for getting all trips
function getAllTrips(req, res) {
    // Ensure trips exist before responding
    if (!trips) {
        return res.status(500).send('Trips data is unavailable.');
    }
    res.json(trips);
}

// Controller for getting a trip by ID
function getTripById(req, res) {
    // Ensure trips exist before searching
    if (!trips) {
        return res.status(500).send('Trips data is unavailable.');
    }

    // Find the trip by ID
    const trip = trips.find(t => t.id === parseInt(req.params.id));
    if (trip) {
        res.json(trip);
    } else {
        res.status(404).send('Trip not found');
    }
}

// Export the controllers
module.exports = { getAllTrips, getTripById };

