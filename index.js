const app = require("express")();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const TEST_URL = "https://vancouver.craigslist.org/";
const STRATEGY = "desktop";
const categories = [
  "accessibility",
  "best-practices",
  "performance",
  "pwa",
  "seo",
];

const axios = require("axios");

const PARAMS = new URLSearchParams({
  url: TEST_URL,
  strategy: STRATEGY,
});

categories.forEach((category) => PARAMS.append("category", category));

const BASE_URL = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

const URL = app.get("/", (req, res) => {
  res.status(200).json("Hello World!");
});

app.get("/api/core", async (req, res) => {
  try {
    const result = await axios.get(`${BASE_URL}?${PARAMS.toString()}`);
    res.status(200).json(result.data.lighthouseResult.categories);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/api/metrics", async (req, res) => {
  try {
    const result = await axios.get(`${BASE_URL}?${PARAMS.toString()}`);
    res.status(200).json(result.data.lighthouseResult.audits.metrics);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
