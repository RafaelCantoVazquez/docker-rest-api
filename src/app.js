const express = require("express");
const app = express();

const students = [
  {
    name: "Josué",
    enrollment: "15003123",
  },
  {
    name: "Rodrigo",
    enrollment: "14007634",
  },
  {
    name: "Gilberto",
    enrollment: "15000567",
  },
  {
    name: "Guillermo",
    enrollment: "12003195",
  },
];

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

module.exports = app;
