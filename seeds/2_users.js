
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 2001, name:'Pauline', email:'pauline@eda.com',hash: ''},
        {id: 2002, name:'Dan', email:'dan@eda.com', hash: ''},
        {id: 2003, name:'Jeremy', email:'jeremy@eda.com', hash: ''}
      ]);
    });
};
