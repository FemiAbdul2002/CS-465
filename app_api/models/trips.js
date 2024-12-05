const mongoose = require('mongoose');

// Define the schema for a trip
const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create and export the model
module.exports = mongoose.model('Trips', tripSchema);

