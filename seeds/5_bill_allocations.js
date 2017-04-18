
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bill_allocations').del()
    .then(function () {
      // Inserts seed entries
      return knex('bill_allocations').insert([
        {id: 5001, bill_id: 4001, user_id: 2001, amount: 112.33},
        {id: 5002, bill_id: 4001, user_id: 2002, amount: 112.33},
        {id: 5003, bill_id: 4001, user_id: 2003, amount: 112.33}
      ]);
    });
};
