
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_list_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list_items').insert([
        {id: 7001, flat_id:1001, item:'toilet paper'},
        {id: 7003, flat_id:1001, item: 'detergent'},
        {id: 7002, flat_id:1001, item: 'soap'}
      ]);
    });
};
