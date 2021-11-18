const express = require("express");
const app = express();
PORT = 8080;

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
