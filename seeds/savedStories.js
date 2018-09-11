
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('savedStories').del()
    .then(function () {
      // Inserts seed entries
      return knex('savedStories').insert([
        {id: 1, story_id: 1, user_id: 1, title: 'Off To School', questions: [], emotions: [], answers: []},
      ]);
    });
};
