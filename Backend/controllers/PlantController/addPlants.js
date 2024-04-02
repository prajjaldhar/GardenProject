const Plants = require("../../models/PlantSchema");

const addPlants = async (req, res) => {
  try {
    const PlantObj = req.body;

    const newPlant = new Plants(PlantObj);
    const savedplant = await newPlant.save();
    res.status(200).json({ message: `Plant added successfully`, savedplant });
  } catch (err) {
    console.error(`Error in adding plant: ${err}`);
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

module.exports = addPlants;
