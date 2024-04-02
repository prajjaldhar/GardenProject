const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: [true, "Please provide an id "],
  },
  plantName: {
    type: String,
    required: true,
  },
  plantDescription: {
    type: String,
    required: true,
  },
  scientificName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  lifetime: {
    type: String,
    required: true,
  },
  medicalAspect: {
    type: String,
    required: true,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  popularity: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  // Additional fields
  watering: {
    type: String,
    required: true,
  },
  sunlight: {
    type: String,
    required: true,
  },
  humidity: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
  growthRate: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  spread: {
    type: String,
    required: true,
  },
  maintenance: {
    type: String,
    required: true,
  },
  floweringSeason: {
    type: String,
    required: true,
  },
  bloomColor: {
    type: String,
    required: true,
  },
  soilType: {
    type: String,
    required: true,
  },
  fertilization: {
    type: String,
    required: true,
  },
  pests: {
    type: String,
    required: true,
  },
  diseases: {
    type: String,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
});

const Plant = mongoose.model("plants", PlantSchema);
module.exports = Plant;
