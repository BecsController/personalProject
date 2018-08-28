
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table){
    table.increments("id");
    table.string("username");
    table.string("email");
    table.string("avatar");
    table.string("saved_stories");
    table.string("saved_avatar", 500000);
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
