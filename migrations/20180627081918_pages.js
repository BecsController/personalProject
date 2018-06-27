
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pages', function (table){
    table.increments("id");
    table.string("title");
    table.string("background");
    table.string("population");
    table.string("emotionOne");
    table.string("emotionTwo");
    table.string("emotionThree");
    table.string("pageText");
    table.string("optionOne");
    table.string("optionTwo");
    table.integer("story_id");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pages')
};
