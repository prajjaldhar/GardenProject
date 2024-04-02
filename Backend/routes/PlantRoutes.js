const express = require("express");
const addPlants = require("../controllers/PlantController/addPlants");
const getPlants = require("../controllers/PlantController/getPlants");
const getPlantsByPrice = require("../controllers/PlantController/getPlantsByPrice");
const getPlantsByPriceLH = require("../controllers/PlantController/getPlantsByPriceLH");

const router = express.Router();

router.post("/addplants", addPlants);
router.get("/getplants/", getPlants);
router.get("/getplants/pricehigh", getPlantsByPrice);
router.get("/getplants/pricelow", getPlantsByPriceLH);
module.exports = router;
