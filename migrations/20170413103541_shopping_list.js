
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_list', function (table) {
    table.increments('id').primary()
    table.string('item')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shopping_list')
};
