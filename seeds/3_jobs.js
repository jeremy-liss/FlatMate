
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {id: 3001, job: 'Dishes', flat_id: 1001, user_id:2001},
        {id: 3002, job: 'Vacuum', flat_id: 1001, user_id:2002},
        {id: 3003, job: 'Laundry', flat_id: 1001, user_id:2003},
        {id: 3004, job: 'Bathroom', flat_id: 1001, user_id:2004},
        {id: 3005, job: 'Mow Lawn', flat_id: 1001, user_id:2005},
        {id: 3006, job: 'Clean Kitchen', flat_id: 1001, user_id:2006}
      ]);
    });
};
