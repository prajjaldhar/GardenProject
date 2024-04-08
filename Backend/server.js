const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const PlantRoutes = require("./routes/PlantRoutes");
const UserRoutes = require("./routes/UserRoutes");

//config
dotenv.config();
app.use(cors());

connectDB();

const PORT = process.env.PORT || 8080 || 5000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/plants", PlantRoutes);
app.use("/api/users", UserRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to express",
  });
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} in ${process.env.DEV_MODE}`)
);
