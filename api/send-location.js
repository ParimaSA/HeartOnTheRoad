const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "location.json");

module.exports = (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required!" });
    }

    const locationData = {
        latitude,
        longitude,
        timestamp: new Date().toISOString(),
    };

    // Write to a file
    fs.writeFileSync(filePath, JSON.stringify(locationData, null, 2));

    console.log("Location saved:", locationData);
    res.status(200).json({ message: "Location received", locationData });
};
