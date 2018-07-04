
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('associations').del()
    .then(function () {
      // Inserts seed entries
      return knex('associations').insert([
        {id: 1, page_id: 1, emotion: '', user_id: 1},
        {id: 2, page_id: 2, emotion: '', user_id: 1},
        {id: 3, page_id: 3, emotion: '', user_id: 1}
      ]);
    });
};
