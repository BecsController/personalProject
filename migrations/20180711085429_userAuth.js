
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userAuth', function (table){
    table.increments("id");
    table.string("name");
    table.string("password");
    table.integer("user_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userAuth')
};
