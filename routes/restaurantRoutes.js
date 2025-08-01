const express = require("express");
const router = express.Router();
const {
  fetchRestaurantMenu,
  fetchRestaurants,
} = require("../controller/restaurantController");
router.route("/").get(fetchRestaurants);
router.route("/:id").get(fetchRestaurantMenu);

module.exports = router;
