const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    transactionNumber: { type: String, required: true },
    items: [
        {
            item: { type: mongoose.Schema.ObjectId, ref: 'Inventory', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true }
        }
    ] ,
    totalCost: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;