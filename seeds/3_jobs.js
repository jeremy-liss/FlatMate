
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {id: 3001, job: 'dishes', flat_id: 1001, user_id:2001},
        {id: 3002, job: 'vacuum', flat_id: 1001, user_id:2002},
        {id: 3003, job: 'laundry', flat_id: 1001, user_id:2003},
      ]);
    });
};
