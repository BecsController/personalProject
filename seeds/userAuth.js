
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userAuth').del()
    .then(function () {
      // Inserts seed entries
      return knex('userAuth').insert([
        {id: 1, password: 'Webby', name: 'Spiderman'},
        {id: 2, password: 'Webby2', name: 'Gwen Stacey'},
        {id: 3, password: 'Fuego', name: 'FenFen'},
        {id: 4, password: 'Mrow', name: 'SofSof'}
      ]);
    });
};
