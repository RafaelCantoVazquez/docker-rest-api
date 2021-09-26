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

app.get("/students", function (req, res) {
  res.status(200).json(students);
});

app.listen(8080, () => {
  console.log("Listening on port 8080!");
});
