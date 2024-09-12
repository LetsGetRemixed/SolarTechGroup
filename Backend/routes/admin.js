const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
const router = express.Router();

const secretKey = process.env.JWT_SECRET;


// Admin login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).send('Admin not found');
        }

        const isMatch = await admin.comparePassword(password);
        if (!isMatch) {
            return res.status(400).send('Invalid password');
        }

        // JWT is created using admin._id signed with the secret key (expires in 1 hour)
        const token = jwt.sign({ id: admin._id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Error loggin in: ' + error.message);
    }
});

// Create a new admin
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const newAdmin = new Admin({ username, password });
        await newAdmin.save();
        res.status(201).send('Admin created suuessfully');
    } catch (error) {
        res.status(500).send('Error creating admin: ' + error.message);
    }
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    // Extracts JWT from the authorization header, removes Bearer and verifies token
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const verified = jwt.verify(token, secretKey);
        req.admin = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalikd token');
    }
};

// Fetch all admins
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(50).send('Error fectching admins' + error.message);
    }
});

module.exports = { router, verifyToken };