const plants = require("../../models/PlantSchema");

const getPlants = async (req, res) => {
  try {
    const plant = await plants.find();
    if (!plant) return res.status(404).send("No plants found.");
    res.json(plant);
  } catch (err) {
    console.error(`Error in finding plants: ${err}`);
    res.status(500).json({ message: "Internal server error", error: err });
  }
};
module.exports = getPlants;
