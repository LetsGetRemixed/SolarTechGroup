const express = require('express');
const app = express();
const port = 2424;

const { connectToDB } = require('./db');

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
const invenmtoryRoutes = require('./routes/inventory');
app.use('/users', userRoutes);
app.use('/inventory', invenmtoryRoutes);

// Connect to DB and start server
connectToDB().then(() => {
    app.listen(port, () => {
        console.log('Server running');
    });
}).catch(err => {
    console.error('Failed to connect to DB', err);
});