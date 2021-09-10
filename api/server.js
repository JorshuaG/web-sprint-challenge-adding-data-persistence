const express = require("express");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

const server = express();

server.use(express.json());
server.use("/api/resources", resourceRouter);
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Error found, did you try 42?",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
