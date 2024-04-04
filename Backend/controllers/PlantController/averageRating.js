const plants = require("../../models/PlantSchema");

const filterPlantsByAverageRating = async (req, res) => {
  try {
    const plantList = await plants.find();

    if (!plantList || plantList.length === 0) {
      return res.status(404).send("No plants found.");
    }

    // Calculate the total rating and count of plants
    let totalRating = 0;
    let plantCount = 0;
    for (const plant of plantList) {
      if (plant.ratings) {
        totalRating += plant.ratings;
        plantCount++;
      }
    }

    // Calculate the average rating
    const averageRating = totalRating / plantCount;

    // Filter plants based on the average rating
    const filteredPlants = plantList.filter(
      (plant) => plant.ratings >= averageRating
    );

    if (!filteredPlants || filteredPlants.length === 0) {
      return res
        .status(404)
        .send("No plants found with the specified average rating.");
    }

    res.json(filteredPlants);
  } catch (err) {
    console.error(`Error in finding plants: ${err}`);
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

module.exports = filterPlantsByAverageRating;
