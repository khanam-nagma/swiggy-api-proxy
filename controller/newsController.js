const axios = require('axios')
const getNews = async (req, res) => {
  const category = req.params.category;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`;
  try {
    const response = await axios.get(url, {
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

module.exports = { getNews };
