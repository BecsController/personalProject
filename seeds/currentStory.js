
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('currentStory').del()
    .then(function () {
      // Inserts seed entries
      return knex('currentStory').insert([
        {id: 1, story_id: 1, user_id: 1, current_page: 1, title: 'Off to School', association_id: 1},
      ]);
    });
};
