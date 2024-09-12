const express = require('express');
const router = express.Router();
const { verifyToken } = require('./admin');
const User = require('../models/users');

// Get all users
router.get('/', verifyToken, async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Error fetching users: ' + error.message);
    }
});

// Add a new user
router.post('/add', async (req, res) => {
    const { name, email, address } = req.body;
    try {
        const newUser = new User({ name, email, address });
        await newUser.save();
        res.status(201).send('User added successfully');
    } catch (error) {
        res.status(400).send('Error adding user: ' + error.message);
    }
});


module.exports = router;