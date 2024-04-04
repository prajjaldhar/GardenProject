const express = require("express");
const addPlants = require("../controllers/PlantController/addPlants");
const getPlants = require("../controllers/PlantController/getPlants");
const getPlantsByPrice = require("../controllers/PlantController/getPlantsByPrice");
const getPlantsByPriceLH = require("../controllers/PlantController/getPlantsByPriceLH");
const averageRating = require("../controllers/PlantController/averageRating");

const router = express.Router();

router.post("/addplants", addPlants);
router.get("/getplants/", getPlants);
router.get("/getplants/pricehigh", getPlantsByPrice);
router.get("/getplants/pricelow", getPlantsByPriceLH);
router.get("/getplants/avgrating", averageRating);
module.exports = router;
