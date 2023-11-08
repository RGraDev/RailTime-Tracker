const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/external-data", (req, res) => {
  const { pathParams } = req.query;
  const apiURL = `http://api.rtt.io/api/v1/json/search/${pathParams}`;

  axios
    .get(apiURL, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          "rttapi_RGraDev:cc9a157b3aa0322416f754eef189caaf7c1b94e2",
        ).toString("base64")}`,
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
