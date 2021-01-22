const express = require("express");
const path = require("path");

const app = express();

const directory = path.join(__dirname, 'public');

const static = express.static(directory);

app.use(static);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
