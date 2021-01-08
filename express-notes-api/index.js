const express = require("express");
const JSONData = require("./data.json");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/api/notes", (req, res) => {
  const arr = [];
  for (const index in JSONData.notes) {
    arr.push(JSONData.notes[index]);
  }
  res.json(arr);
})

app.get("/api/notes/:id", (req, res) => {
  const ID = Number(req.params.id);
  if (Math.sign(ID) !== 1) {
    return res.status(400).json({
      error: "ID given was not a positive integer"
    });
  }
  for (const index in JSONData.notes) {
    if (ID === Number(index)) {
      return res.json(JSONData.notes[index]);
    }
  }
  res.status(404).json({
    error: "ID does not exist"
  });
})

app.post("/api/notes", (req, res) => {
  const content = req.body;
  const newID = JSONData.nextId++;
  if (Object.entries(content).length === 0) {
    return res.status(400).json({
      error: "content is a required field"
    });
  } else {
    JSONData.notes[newID] = content;
    JSONData.notes[newID].id = newID;
    let newEntry = JSONData;
    newEntry = JSON.stringify(newEntry, null, 2);
    fs.writeFile("./data.json", newEntry, "utf8", err => {
      if (err) {
        return res.status(500).json({
          error: "An unexpected error occurred."
        })
      }
      res.status(201).json(JSONData.notes[newID]);
    })
  }
})

app.delete("/api/notes/:id", (req, res) => {
  const ID = Number(req.params.id);
  if (!JSONData.notes.hasOwnProperty(ID)) {
    return res.status(404).json({
      error: `cannot find note with id ${ID}`
    });
  }
  for (const index in JSONData.notes) {
    if (Math.sign(ID) !== 1) {
      return res.status(400).json({
        error: "ID given was not a positive integer"
      });
    }
    if (ID === Number(index)) {
      delete JSONData.notes[ID];
    }
  }
  let newData = JSONData;
  newData = JSON.stringify(newData, null, 2);
  fs.writeFile("./yo/data.json", newData, "utf8", err => {
    if (err) {
      console.log("yo");
      return res.status(500).json({
        error: "An unexpected error occurred."
      })
    }
    res.sendStatus(204);
  })
})


app.listen(3000, () => {});
