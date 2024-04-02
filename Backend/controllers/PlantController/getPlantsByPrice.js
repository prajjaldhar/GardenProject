const plants = require("../../models/PlantSchema");

const getPlantsByPrice = async (req, res) => {
  try {
    // Find plants and sort them based on price in descending order
    const plant = await plants.find().sort({ price: -1 });

    // Check if plants are found
    if (!plant || plant.length === 0) {
      return res.status(404).send("No plants found.");
    }

    // Send the sorted plants in the response
    res.json(plant);
  } catch (err) {
    console.error(`Error in finding plants: ${err}`);
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

module.exports = getPlantsByPrice;
