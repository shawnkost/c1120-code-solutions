const fs = require("fs");

const path = process.argv[2];

fs.readFile(`./node-fs-readfile/${path}`, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
})
