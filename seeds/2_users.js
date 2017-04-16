
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 2001, name:'Pauline', email:'pauline@eda.com',hash: '', flat_id:1001},
        {id: 2002, name:'Dan', email:'dan@eda.com', hash: '', flat_id:1001},
        {id: 2003, name:'Jeremy', email:'jeremy@eda.com', hash: '', flat_id:1001}
      ]);
    });
};
