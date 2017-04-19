var supertest = require('supertest')
var test = require('tape')

var app = require('../../server/server')

test('return items', function (t) {
  supertest(app)
    .get('api/items')
    .end(function(err, res) {
      console.log(err);
        var response = typeof (res.body)
        var expected = 'object'

        // assert
        t.equal(response, expected)
        t.end()
    })
})

test('close database connection', (t) => {
  app.get('knex').destroy()
  t.end()
})
