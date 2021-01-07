const express = require("express");

let nextID = 1;

const grades = {};


const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (let index in grades) {
    arr.push(grades[index]);
  }
  res.json(arr);
})

app.post('/api/grades', (req, res) => {
  grades[nextID] = req.body;
  grades[nextID].id = nextID;
  res.status(201).json(grades[nextID])
  nextID = nextID + 1;
})

app.listen(3000, () => {})
