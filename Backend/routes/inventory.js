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
        const newItem = new Inventory({
            itemName,
            category,
            quantity,
            price,
            dimensions,
            features,    
            image,       
            description  
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

// Update quantity of an item
router.put('/updateQuantity', async (req, res) => {
    const { itemName, addedQuantity } = req.body;
    console.log(req.body);
    try {
        const updatedItem = await Inventory.findOneAndUpdate(
            { itemName },
            { $inc: { quantity: addedQuantity } }, // $inc operator increments the quantity
            { new: true } // Return updated item
        );
        if (!updatedItem) {
            return res.status(404).send('Item not found');
        }
        res.status(200).json({ message: 'Quantity updated successfully', updatedItem });
    } catch (error) {
        res.status(400).send('Error updating quantity: ' + error.message);
    }
});

module.exports = router;