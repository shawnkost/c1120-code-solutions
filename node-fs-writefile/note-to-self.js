const fs = require("fs");

fs.writeFile("./node-fs-writefile/note.txt", process.argv[2], err => {
  if (err) throw err;
  console.log("done!")
})
