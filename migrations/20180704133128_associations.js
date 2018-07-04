
exports.up = function(knex, Promise) {
  return knex.schema.createTable('associations', function (table){
    table.increments('id');
    table.integer('page_id');
    table.string('emotion');
    table.integer('user_id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('associations')
};
