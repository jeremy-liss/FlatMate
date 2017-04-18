
exports.up = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.string('facebook')
    table.string('username')
    table.binary('hash')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropColumn('facebook')
    table.dropColumn('username')
    table.dropColumn('hash')

  })

};
