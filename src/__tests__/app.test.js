const app = require("../app"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

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

it("It should receive a list of students", async () => {
  const response = await request.get("/students");

  expect(response.status).toBe(200);
  expect(response.body).toStrictEqual(students);
});
