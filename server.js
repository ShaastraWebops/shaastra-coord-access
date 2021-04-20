const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("App running on port: ", process.env.PORT || 4000);
});
