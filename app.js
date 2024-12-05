const express = require('express');
const path = require('path');
const trips = require('./data/trips.json');
const apiRouter = require('./app_api/routes/trips');
const app = express();

app.use(express.json());
app.use('/api', apiRouter);

// Set up Handlebars (HBS) as the templating engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Use the router from app_server/routes
const indexRouter = require('./app_server/routes/index');
app.use('/', indexRouter);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set the port for the server
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

