const fs = require("fs");

const path1 = process.argv[2];
const path2 = process.argv[3];

fs.readFile(`./node-fs-writefile/${path1}`, "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const fileData = data;
  console.log(data);

  fs.writeFile(`./node-fs-writefile/${path2}`, fileData + "\n", "utf8", err => {
    if (err) {
      console.log(err);
    }
  })
})
