const fs = require("fs");
const express = require("express");
const app = express();
const axios = require("axios");
PORT = 8080;

API_URL = `http://localhost:${PORT}`;

axios
  .get(`${API_URL}/quiz`)
  .then((res) => {
    fs.readFile("./data/quiz.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.JSON.parse(data);
    });
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
