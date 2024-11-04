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

// Initialize Firebase Admin SDK
admin.initializeApp();

const app = express();


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



admin.initializeApp();

// Export the app as a Firebase HTTPS function
exports.api = functions.https.onRequest(app);