const path = require('path');
const dotenv = require('dotenv');
const Express = require('express');
const ConnectToDataBase=require("./config/ConfigDatabase");

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Create Express Application
const Application = Express();

// Import routes
const products = require('./Routes/Products');
const orders = require("./Routes/Orders");

// Database Connection
ConnectToDataBase();

//Middleware to get JSON data input in POST method
Application.use(Express.json());
// Use routes
Application.use('/api/v1/', products);
Application.use('/api/v1/', orders);

// Start the server
const PORT = process.env.PORT || 5000;
Application.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV}`);
});
