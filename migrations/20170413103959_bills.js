
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bills', function (table) {
    table.increments('id').primary()
    table.integer('flat_id')
    table.integer('amount')
    table.string('details')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bills')
};
