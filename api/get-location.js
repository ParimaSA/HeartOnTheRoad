const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "location.json");

module.exports = (req, res) => {
    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: "No location available yet" });
    }

    const locationData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    console.log("Sending latest location:", locationData);
    res.status(200).json(locationData);
};
