const express = require('express');
const connectToDB = require('./db');
const userRoutes = require('./routes/users');
const inventoryRoutes = require('./routes/inventory');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/inventory', inventoryRoutes);

// Connect to MongoDB
connectToDB();

// Start server
app.listen(2424, () => {
    console.log('Server is running');
});