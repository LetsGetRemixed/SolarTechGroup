const express = require('express');
const router = express.Router();
const { getDB } = require('../db');

// Get all inventory
router.get('/', async (req, res) => {
    const db = await getDB();
    try {
        const items = await db.collection('TestCollection2').find().toArray();
        res.json(items);
    } catch(error) {
        res.status(500).send('Error fecthing inventory');
    }
});

module.exports = router;