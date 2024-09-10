const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: false },
    description: String
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;