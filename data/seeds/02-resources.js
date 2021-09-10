exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    {
      resource_id: 1,
      resource_name: "fake resource 1",
      resource_description: "a description of a fake resource",
    },
    {
      resource_id: 2,
      resource_name: "fake resource 2",
      resource_description: "a description of a 2nd fake resource",
    },
  ]);
};
