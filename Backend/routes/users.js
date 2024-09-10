const express = require('express');
const router = express.Router();
const { getDB } = require('../db');

// Get all users
router.get('/', async (req, res) => {
    const db = getDB();
    try {
        const users = await db.collection('TestCollection1').find().toArray();
        res.json(users);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;