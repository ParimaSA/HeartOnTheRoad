const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" })); // Allow all domains


// Store the latest location
let latestLocation = { latitude: null, longitude: null, timestamp: null };

// POST - Receive location updates
app.post("/send-location", (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required!" });
    }

    latestLocation = { latitude, longitude, timestamp: new Date().toISOString() };
    console.log("Updated location:", latestLocation);

    res.json({ message: "Location received", latestLocation });
});

// GET - Retrieve latest location (for Node-RED)
app.get("/get-location", (req, res) => {
    if (!latestLocation.latitude || !latestLocation.longitude) {
        return res.status(404).json({ error: "No location available yet" });
    }
    console.log("Send the location");
    res.json(latestLocation);
});

// Start server
const PORT = 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});