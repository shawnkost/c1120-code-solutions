const express = require("express");

let nextID = 1;

const grades = {};


const app = express();

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (let index in grades) {
    arr.push(grades[index]);
  }
  res.json(arr);
})

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextID] = req.body;
  grades[nextID].id = nextID;
  res.json(grades[nextID]);
  res.status(201).end();
  nextID = nextID + 1;
})

app.listen(3000, () => {})
