
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bills').del()
    .then(function () {
      // Inserts seed entries
      return knex('bills').insert([
        {id: 4001, flat_id: 1001, amount: 100, details: 'electricity'},
        {id: 4002, flat_id: 1001, amount: 130, details: 'internet'},
        {id: 4003, flat_id: 1001, amount: 107, details: 'utilities'}
      ]);
    });
};
