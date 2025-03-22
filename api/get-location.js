const { MongoClient } = require('mongodb');

// MongoDB URI from your MongoDB Atlas
const uri = process.env.MONGO_URI;

// Function to connect to MongoDB and get the collection
async function getDb() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('locationDB'); // Database name
    const collection = db.collection('locations'); // Collection name
    return collection;
}

// GET - Retrieve latest location
module.exports.getLocation = async (req, res) => {
    try {
        const collection = await getDb();

        // Fetch the most recent location data from the MongoDB collection
        const latestLocation = await collection.find().sort({ timestamp: -1 }).limit(1).toArray();

        if (latestLocation.length === 0) {
            return res.status(404).json({ error: "No location available yet" });
        }

        console.log("Sending the location:", latestLocation[0]);

        res.status(200).json(latestLocation[0]);
    } catch (error) {
        console.error("Error retrieving location:", error);
        res.status(500).json({ error: "Failed to retrieve location" });
    }
};
