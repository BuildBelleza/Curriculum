const express = require("express");
const pgp = require('pg-promise')();

const es6Renderer = require("express-es6-template-engine");

const server = express();

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'digitalCrafts',
  user: 'postgres',
  password: 'test',
  allowExitOnIdle: true
};

const db = pgp(cn);

server.use(express.static(__dirname + "/public"));

server.engine("html", es6Renderer);
server.set("views", "views");
server.set("view engine", "html");



server.get("/heartbeat", (req, res) => {
  res.json({ is: "working" });
});

server.get('/employees', async (req, res) => {
  const employees = await getEmployees();
  res.json({
    employees

  })
});

async function getEmployees() {
  const employees = await db.any('select * from employees', [true]);
  return employees;
}

server.listen(8080, () => {
  console.log("The server is listening at PORT 8080");
});