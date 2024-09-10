const express = require('express');
const cors = require('cors');
const connectToDB = require('./db');
const userRoutes = require('./routes/users');
const inventoryRoutes = require('./routes/inventory');

const app = express();

app.use(cors()); // Enable cors for routes
app.use(express.json()); // Parse JSON bodies for incoming request

// Routes
app.use('/users', userRoutes);
app.use('/inventory', inventoryRoutes);

// Connect to MongoDB
connectToDB();

// Start server
app.listen(2424, () => {
    console.log('Server is running');
});