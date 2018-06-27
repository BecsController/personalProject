
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stories', function (table){
    table.increments("id");
    table.string("title");
    table.integer("user_id");
    table.string("genre");
    table.string("image");
    table.string("description");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stories')
};
