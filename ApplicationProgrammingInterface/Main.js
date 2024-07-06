const path = require('path');
const dotenv = require('dotenv');
const express = require('express');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Create Express application
const app = express();

// Import routes
const products = require('./Routes/Products');
const orders = require("./Routes/Orders");

// Use routes
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV}`);
});
