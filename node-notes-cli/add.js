const fs = require("fs");
const notesData = require("./data.json");

const newEntry = () => {
  notesData.notes[notesData.nextId] = process.argv[3];
  notesData.nextId = notesData.nextId + 1;
  const newValue = JSON.stringify(notesData, null, 2);
  fs.writeFile("./node-notes-cli/data.json", newValue, "utf8", err => {
    if (err) throw err;
  })
}

module.exports = newEntry;
