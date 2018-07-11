
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userAuth').del()
    .then(function () {
      // Inserts seed entries
      return knex('userAuth').insert([
        {id: 1, password: '', name: '', user_id: },
        {id: 2, password: '', name: '', user_id: },
        {id: 3, password: '', name: '', user_id: }
      ]);
    });
};
