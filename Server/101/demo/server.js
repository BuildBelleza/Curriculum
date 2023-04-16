const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "Hello World" });
  res.send("Hello Universe.");
});

server.listen(8080, () => {
  console.log("The server is running on port 8080");
});
