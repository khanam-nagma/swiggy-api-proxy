const axios = require("axios");

const fetchRestaurants = async (req, res) => {
  const swiggyUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    const response = await axios.get(swiggyUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error("Axios fetch error:", err.message);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: err.message });
  }
};

const fetchRestaurantMenu = async (req, res) => {
  const restId = req.params.id;
  const menuAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`;
  try {
    const response = await axios.get(menuAPI, {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error("Axios fetch error:", err.message);
    res
      .status(500)
      .json({ error: "Failed to fetch data", details: err.message });
  }
};

module.exports = {
  fetchRestaurantMenu,
  fetchRestaurants,
};
