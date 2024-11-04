const express = require('express');
const cors = require('cors');
const connectToDB = require('./db');
const userRoutes = require('./routes/users');
const inventoryRoutes = require('./routes/inventory');
const purchaseRoutes = require('./routes/purchases');
const adminRoutes = require('./routes/admin');
const loginRoute = require('./routes/login');
const dotenv = require('dotenv');

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const admin = require('firebase-admin');


dotenv.config();

const app = express();
const port = process.env.PORT || 2424;

app.use(cors()); // Enable cors for routes
app.use(express.json()); // Parse JSON bodies for incoming request

// Routes
app.use('/users', userRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/purchases', purchaseRoutes);
app.use('/admin', adminRoutes.router);
app.use('/login', loginRoute);


// Connect to MongoDB
connectToDB();

// Start server
app.listen(2424, () => {
    console.log('Server is running');
});

admin.initializeApp();

exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});