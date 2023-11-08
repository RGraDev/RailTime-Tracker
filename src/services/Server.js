const express = require("express");
const axios = require("axios");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/external-data", (req, res) => {
  const { pathParams } = req.query;
  const apiURL = `http://api.rtt.io/api/v1/json/search/${pathParams}`;
  const username = process.env.API_USERNAME;
  const password = process.env.API_PASSWORD;

  axios
    .get(apiURL, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString(
          "base64",
        )}`,
      },
    })
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Error Fetching Data" });
    });
});

app.listen(3001, () => {
  console.log("Proxy server is running on port 3001");
});


