const express = require('express');
const router = express.Router();

// Define a route for the home page
router.get('/', (req, res) => {
    res.render('home'); // Adjust 'home' to match your HBS template name
});

module.exports = router;
