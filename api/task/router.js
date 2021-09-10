const express = require("express");
const Task = require("./model");
const router = express.Router();

router.post("/", (req, res, next) => {
  Task.insert(req.body)
    .then((task) => {
      res.status(201).json({ ...task, task_completed: !!task.task_completed });
    })
    .catch(next);
});
router.get("/", (req, res, next) => {
  Task.get()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

module.exports = router;
