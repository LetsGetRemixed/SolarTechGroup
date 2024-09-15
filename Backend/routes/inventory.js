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


// Add a new item to the inventory
router.post('/add', async (req, res) => {
    const { itemName, category, quantity, price, dimensions, features, image, description } = req.body;
    
    try {
        // Create a new inventory item with the provided data
        const newItem = new Inventory({
            itemName,
            category,
            quantity,
            price,
            dimensions,
            features,    // Corrected typo from 'fetures' to 'features'
            image,       // Optional field
            description  // Optional field
        });

        // Save the new item to the database
        await newItem.save();

        // Send a success response
        res.status(201).send('Item added successfully');
    } catch (error) {
        // Handle any errors that occurred during the process
        res.status(400).send('Error adding item: ' + error.message);
    }
});

module.exports = router;