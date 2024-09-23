const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: false },
    price: { type: Number, required: false, default: null },
    dimensions: { type: String, required: false },
    features: [{ type: String }],
    image: { type: String, default: "" }, // Set default to empty string
    description: { type: String, default: "" } // Set default to empty string
});


const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;