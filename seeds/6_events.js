
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {id: 6001, flat_id:1001, date:'2017-04-21', event:'graduation'},
        {id: 6002, flat_id:1001, date:'2017-05-15', event:'flat inspection'},
        {id: 6003, flat_id:1001, date:'2017-11-01', event:'flat warming'},
        {id: 6004, flat_id:1001, date:'2017-03-08', event:'birthday party!'},
        {id: 6005, flat_id:1001, date:'2017-12-25', event:'christmas'}
      ]);
    });
};
