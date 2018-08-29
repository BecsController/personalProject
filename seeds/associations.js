
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('associations').del()
    .then(function () {
      // Inserts seed entries
      return knex('associations').insert([
        {id: 1, page_id: 1, emotion: 'angry', user_id: 1},
      ]);
    });
};
