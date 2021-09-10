exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      project_id: 1,
      project_name: "Fake Project",
      project_description: "A description for a fake project",
      project_completed: false,
    },
  ]);
};
