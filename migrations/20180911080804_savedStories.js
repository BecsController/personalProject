
exports.up = function(knex, Promise) {
  return knex.schema.createTable('savedStories', function (table){
      table.increments("id");
      table.integer("story_id");
      table.integer("user_id");
      table.integer("title");
      table.string("questions");
      table.string("emotions");
      table.string("answers");
    })
  };

  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('savedStories')
  };
