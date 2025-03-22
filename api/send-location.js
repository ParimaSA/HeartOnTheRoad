let latestLocation = { latitude: null, longitude: null, timestamp: null };

module.exports = (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and longitude are required!" });
    }

    // Store location data
    latestLocation = { latitude, longitude, timestamp: new Date().toISOString() };

    console.log("Updated location:", latestLocation);

    res.status(200).json({ message: "Location received", latestLocation });
};
