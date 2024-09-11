const express = require('express');
const router = express.Router();
const Purchase = require('../models/purchase');
const Inventory = require('../models/inventory');
const User = require('../models/users');

// Add a new purchase
router.post('/buy', async (req, res) => {
    const { userId, items } = req.body;
    try {
        let totalCost = 0;
        const purchasedItems = [];
        
        // Calculate total cost of items and update inventory
        for (let item of items) {
            // Find the item
            const inventoryItem = await Inventory.findById(item.itemId);

            // If item quantity is greater than what we have in stock : return 
            if (!inventoryItem || inventoryItem.quantity < item.quantity) {
                return res.status(400).send('Ityem out of stock');
            }

            // Calculaet total cost
            totalCost += inventoryItem.price * item.quantity;

            // Prepare purchased item details
            purchasedItems.push({
                item: inventoryItem._id,
                quantity: item.quantity, // Item.qunitity for the number of items bought 
                price: inventoryItem.price
            });

            // Update inventory
            inventoryItem.quantity -= item.quantity;
            await inventoryItem.save();
        }

            // Create a new Purchase
            const newPurchase = new Purchase({
                user: userId,
                transactionNumber: `TXN-${Date.now()}`,
                items: purchasedItems,
                totalCost
            });

            await newPurchase.save();

            // Send response
            res.status(201).send('Purchase successful'); 
    } catch (error) {
        res.status(500).send('Error processing purchase');
    }
});

// Fetch purchases for a specific user
router.get('/user/:userId', async (req, res) => {
    try {
        const purchases = await Purchase.find({ user: req.params.userId }).populate({
            path: 'items.item',
            select: 'itemNane price description'
        });
        res.status(200).json(purchases);
    } catch(error) {
        res.status(500).send('Error fecthing purchases for this user', error);
    }
});

// Fetch all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Purchase.find().populate({
            path: 'items.item',
            select: 'itemName'
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).send('Error fecthing all transactions', error);
    }
});

// Fetch transaction by day
router.get('/day/:date', async (req, res) => {
    const { date } = req.params;
    try {
        // Parse the date and set the range for that day
        const startDate = new Date(date);
        console.log('StartDate: ',startDate);
        const endDate = new Date(date);
        endDate.setDate(startDate.getDate() + 1); // Set end date to the next day

        const transactions = await Purchase.find({
            date: {
                $gte: startDate,
                $lt: endDate
            }
        }).populate({
            path: 'items.item',
            select: 'itemName'
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).send('Erro fetching transaction for the specific date', error);
    }
});

// Fetch transactions by month
router.get('/month/:year/:month', async (req, res) => {
    const { year, month } = req.params;
    try {
        // Start and end dates for the next month
        const startDate = new Date(year, month - 1, 1); // Months are 0 - indexed
        const endDate = new Date(year, month, 1); // Start of the next month
        
        const transactions = await Purchase.find({
            date: {
                $gte: startDate,
                $lt: endDate
            }
        }).populate({
            path: 'items.item',
            select: 'itemName'
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).send('Error fetching transaction for the specific month', error);
    }
});


module.exports = router;