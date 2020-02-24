const express = require("express");

const server = express();

const projects = require("./projects");
const actions = require("./actions");

server.use(express.json());
// server.use(logger)

server.get("/", (req, res) => {
  res.send(`<h1>I hope this thing works</h1>`);
});

//custom middleware

// function logger(req, res, next) {
//   const { method, originalUrl } = req;
//   console.log(`${method} to ${originalUrl}`);
//
//   next();
// }

server.use("/api/actions", actions);
server.use("/api/projects", projects);

module.exports = server;
