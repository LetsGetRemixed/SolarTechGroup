const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
let db;

async function connectToDB() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        db = client.db('TestDatabase1');
        console.log("Success");
    } catch(error) {
        console.error('Could not connect to MongoDB', error);
    }
}

function getDB() {
    if (!db) {
        throw Error('Database not initilized');
    }
    return db;

}

module.exports = { connectToDB, getDB };