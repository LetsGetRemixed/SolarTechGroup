const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Get all inventory
router.get('/', async (req, res) => {
    try {
        const items = await Inventory.find();
        res.status(200).json(items);
    } catch(error) {
        res.status(500).send('Error fetching inventory: ' + error.message);
    }
});

// Get a single Item
router.get('/:id', async (req, res) => {
    try {
        const item = await Inventory.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).send('Error fetching product: ' + error.message);
    }
});


// Add a new Item
router.post('/add', async (req, res) => {
    const { itemName, quantity, price, description } = req.body;
    try {
        const newItem = new Inventory({ itemName, quantity, price, description });
        await newItem.save();
        res.status(201).send('Item added successfully');
    } catch (error) {
        res.status(400).send('Error adding Item: ' + error.message);
    }
});

module.exports = router;