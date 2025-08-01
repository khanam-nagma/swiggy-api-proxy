const express = require("express");
const axios = require("axios");
const cors = require("cors");
const restaurantRouter = require("./routes/restaurantRoutes")

const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 8080;

app.use("/api/restaurants/", restaurantRouter);

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
