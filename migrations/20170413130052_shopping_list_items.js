
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_list_items', function (table) {
    table.increments('id').primary()
    table.integer('flat_id')
    table.string('item')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shopping_list_items')
};
