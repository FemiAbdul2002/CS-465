const express = require('express'); // Import the Express module
const app = express(); // Create an instance of the Express app

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set the port for the server
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
