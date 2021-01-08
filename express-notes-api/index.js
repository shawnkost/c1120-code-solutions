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
  if (JSONData.notes[ID]) {
    return res.json(JSONData.notes[ID]);
  } else {
    res.status(404).json({
      error: "ID does not exist"
    });
  }
})

app.post("/api/notes", (req, res) => {
  const content = req.body;
  const newID = JSONData.nextId++;
  if (content.content) {
    JSONData.notes[newID] = content;
    JSONData.notes[newID].id = newID;
  } else {
    return res.status(400).json({
      error: "content is a required field"
    });
  }
  let newEntry = JSONData;
  newEntry = JSON.stringify(newEntry, null, 2);
  fs.writeFile("./data.json", newEntry, "utf8", err => {
    if (err) {
      return res.status(500).json({
        error: "An unexpected error occurred."
      });
    }
    res.status(201).json(JSONData.notes[newID]);
  });
})

app.delete("/api/notes/:id", (req, res) => {
  const ID = Number(req.params.id);
  if (Math.sign(ID) !== 1) {
    return res.status(400).json({
      error: "ID given was not a positive integer"
    });
  }
  if (!JSONData.notes[ID]) {
    return res.status(404).json({
      error: `cannot find note with id ${ID}`
    });
  }
  delete JSONData.notes[ID];
  let newData = JSONData;
  newData = JSON.stringify(newData, null, 2);
  fs.writeFile("./data.json", newData, "utf8", err => {
    if (err) {
      return res.status(500).json({
        error: "An unexpected error occurred."
      });
    }
    res.sendStatus(204);
  })
})

app.put("/api/notes/:id", (req, res) => {
  const content = req.body;
  const ID = Number(req.params.id);
  if (Math.sign(ID) !== 1) {
    return res.status(400).json({
      error: "ID given was not a positive integer"
    });
  }
  if (!JSONData.notes[ID]) {
    return res.status(404).json({
      error: `cannot find note with id ${ID}`
    });
  }
  if (content.content) {
    JSONData.notes[req.params.id] = content;
    JSONData.notes[req.params.id].id = req.params.id
  } else {
    return res.status(400).json({
      error: "content is a required field"
    });
  }
  let newData = JSONData;
  newData = JSON.stringify(newData, null, 2);
  fs.writeFile("./data.json", newData, "utf8", err => {
    if (err) {
      return res.status(500).json({
        error: "An unexpected error occurred"
      });
    }
    res.status(200).json(content);
  });
})

app.listen(3000, () => {});
