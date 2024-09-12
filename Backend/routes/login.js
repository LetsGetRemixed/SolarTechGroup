// server.js or a separate auth route
const express = require('express');
const router = express.Router();
require('dotenv').config(); // Load .env variables

// Admin login route
router.post('/', (req, res) => {
    const { username, password } = req.body;

    // Check if the credentials match the ones in the .env file
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        // Generate a simple token or use a JWT for real-world applications
        return res.status(200).json({ message: 'Login successful', token: 'simple-token' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
