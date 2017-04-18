
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('flat').del()
    .then(function () {
      // Inserts seed entries
      return knex('flat').insert([
        {id: 1001, name: 'Kakapo'}
      ]);
    });
};
