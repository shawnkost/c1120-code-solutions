const fs = require("fs");
const notesData = require("./data.json");
const ID = process.argv[3];

const deleteEntry = () => {
  delete notesData.notes[ID];
  const newObj = JSON.stringify(notesData, null, 2);
  fs.writeFile("./node-notes-cli/data.json", newObj, "utf8", err => {
    if (err) throw err;
  })
}

module.exports = deleteEntry;
