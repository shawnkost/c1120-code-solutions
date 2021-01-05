const fs = require("fs");

const read = () => {
  fs.readFile("./node-notes-cli/data.json", "utf8", (err, data) => {
    let notesObj = JSON.parse(data);
    for (let index in notesObj.notes) {
      console.log(index + ": " + notesObj.notes[index])
    }
    if (err) throw err;
  })
}

module.exports = read;
