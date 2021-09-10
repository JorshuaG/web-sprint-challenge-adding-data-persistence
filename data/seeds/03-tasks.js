exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    {
      task_id: 1,
      task_description: "a description of a fake task",
      task_notes: "some notes",
      task_completed: false,
      project_id: 1,
    },
  ]);
};
