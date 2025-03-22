let latestLocation = { latitude: null, longitude: null, timestamp: null };

module.exports = (req, res) => {
    if (!latestLocation.latitude || !latestLocation.longitude) {
        return res.status(404).json({ error: "No location available yet" });
    }

    console.log("Sending the latest location:", latestLocation);

    res.status(200).json(latestLocation);
};
