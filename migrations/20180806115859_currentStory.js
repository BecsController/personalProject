
exports.up = function(knex, Promise) {
  return knex.schema.createTable('currentStory', function (table){
    table.increments("id");
    table.integer("story_id");
    table.integer("user_id");
    table.integer("current_page");
    table.string("association_id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('currentStory')
};
