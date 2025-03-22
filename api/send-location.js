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

// POST - Receive location updates
module.exports.sendLocation = async (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required!" });
    }

    const locationData = {
        latitude,
        longitude,
        timestamp: new Date().toISOString(),
    };

    try {
        const collection = await getDb();

        // Insert the location data into the MongoDB collection
        await collection.insertOne(locationData);

        console.log("Location saved:", locationData);
        res.status(200).json({ message: "Location received", locationData });
    } catch (error) {
        console.error("Error saving location:", error);
        res.status(500).json({ error: "Failed to save location" });
    }
};
