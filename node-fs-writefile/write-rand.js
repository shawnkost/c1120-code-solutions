const fs = require("fs");

fs.writeFile("./node-fs-writefile/random.txt", Math.random(), err => {
  if (err) throw err;
  console.log("done!");
})
