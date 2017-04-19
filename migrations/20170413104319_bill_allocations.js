
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bill_allocations', function (table) {
    table.increments('id').primary()
    table.integer('bill_id')
    table.integer('user_id')
    table.integer('amount')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bill_allocations')
};
