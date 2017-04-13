
exports.up = function(knex, Promise) {
  return knex.schema.createTable('jobs', function (table) {
    table.increments('id').primary()
    table.string('job')
    table.integer('flat_id')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('jobs')
};
