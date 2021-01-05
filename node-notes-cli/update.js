const fs = require("fs");
const notesData = require("./data.json");
const ID = process.argv[3];

const updateEntry = () => {
  notesData.notes[ID] = process.argv[4];
  const newData = JSON.stringify(notesData, null, 2);
  fs.writeFile("./node-notes-cli/data.json", newData, "utf8", err => {
    if (err) throw err;
  })
}

module.exports = updateEntry;
