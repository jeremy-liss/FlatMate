
exports.up = function(knex, Promise) {
  return knex.schema.createTable('flat', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('bills_id')
    table.integer('job_id')
    table.integer('calendar_id')
    table.integer('shopping_list_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('flat')
};
