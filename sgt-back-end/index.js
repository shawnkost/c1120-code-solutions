const express = require("express");

const app = express();

app.use(express.json());


const pg = require("pg");

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
})


app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";`;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      res.status(500).json({
        error: "Database query was not successful"
      });
    });
})

app.post('/api/grades', (req, res) => {
  const values = req.body;
  const scoreInt = parseInt(values.score, 10);
  if (Object.entries(values).length !== 3) {
    res.status(400).json({
      error: "Name, course, & score are required properties"
    })
    return;
  }
  if (scoreInt < 1 || scoreInt > 100) {
    res.status(400).json({
      error: "The score must be an integer between 1-100"
    })
    return;
  }
  const sql = `
    insert into "grades"
    ("name", "course", "score")
    values ($1, $2, $3)
    returning *`;
  db.query(sql, [values.name, values.course, values.score])
    .then(result => {
      const grade = result.rows;
      res.status(201).json(grade[0]);
    })
    .catch(err => {
      res.status(500).json({
        error: "Database query was not successful"
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const values = req.body;
  const scoreInt = parseInt(values.score, 10);
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: "Invalid gradeId"
    });
    return;
  }
  if (Object.entries(values).length !== 3) {
    res.status(400).json({
      error: "Name, course, & score are required properties"
    });
    return;
  }
  if (scoreInt < 1 || scoreInt > 100) {
    res.status(400).json({
      error: "The score must be an integer between 1-100"
    });
    return;
  }
  const sql = `
    update "grades"
    set "name" = $1,
    "course" = $2,
    "score" = $3
    where "gradeId" = $4
    returning *;`;
  db.query(sql, [values.name, values.course, values.score, gradeId])
    .then(result => {
      const grade = result.rows;
      console.log("grade", grade);
      if (grade.length === 0) {
        res.status(404).json({
          error: "Test"
        })
      } else {
        console.log("grade", grade);
        res.status(200).json(grade[0]);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "Database query was not successful"
      });
    });
})




// app.put('/api/grades/:gradeId', (req, res) => {
//   const values = req.body;
//   const scoreInt = parseInt(values.score, 10);
//   const gradeId = Number(req.params.gradeId);
//   if (!Number.isInteger(gradeId) || gradeId <= 0) {
//     res.status(400).json({
//       error: "Invalid gradeId"
//     });
//     return;
//   }
//   if (Object.entries(values).length !== 3) {
//     res.status(400).json({
//       error: "Name, course, & score are required properties"
//     });
//     return;
//   }
//   if (scoreInt < 1 || scoreInt > 100) {
//     res.status(400).json({
//       error: "The score must be an integer between 1-100"
//     });
//     return;
//   }
//   const sql = `
//     update "grades"
//     set "name" = $1,
//     "course" = $2,
//     "score" = $3
//     where "gradeId" = $4
//     returning *;`;
//   db.query(sql, [values.name, values.course, values.score, gradeId])
//     .then(result => {
//       const grade = result.rows;
//       console.log("grade", grade);
//       res.status(200).json(grade[0]);
//     })
//     .catch(err => {
//       res.status(500).json({
//         error: "Database query was not successful"
//       });
//     });
// })
