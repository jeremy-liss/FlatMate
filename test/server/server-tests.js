var supertest = require('supertest')
var test = require('tape')

var app = require('../../server/server')

test('return users', function (t) {
  supertest(app)
    .get('/api/users')
    .end(function(err, res) {
        var response = typeof (res.body)
        var expected = 'object'
        t.equal(response, expected)
        t.end()
    })
})

test('return events', function (t) {
  supertest(app)
    .get('/api/events')
    .end(function(err, res) {
        var response = typeof (res.body)
        var expected = 'object'
        t.equal(response, expected)
        t.end()
    })
})

test('return bills', function (t) {
  supertest(app)
    .get('/api/bills')
    .end(function(err, res) {
        var response = typeof (res.body)
        var expected = 'object'
        t.equal(response, expected)
        t.end()
    })
})

test('return jobs', function (t) {
  supertest(app)
    .get('/api/jobs')
    .end(function(err, res) {
        var response = typeof (res.body)
        var expected = 'object'
        t.equal(response, expected)
        t.end()
    })
})

test('return flat users', function (t) {
  supertest(app)
    .get('/api/flatusers')
    .end(checkReturnedObject)

  function checkReturnedObject (err, res) {
    if (err) { throw err }

    var response = typeof (res.body)
    var expected = 'object'
    var actualID = res.body[0].flat_id
    var expectedID = 1001

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.end()
  }
})

test('add a user', function (t) {
  supertest(app)
    .post('/api/users')
    .send({name:'name', email:'email', hash:'hash', flat_id:1})
    .end(function(err, res) {
        var response = (res.body.length)
        var expected = 4
        t.equal(response, expected)
        t.end()
    })
})

test('del an item', function (t) {
  supertest(app)
    .delete('/api/shopping_list_items')
    .send({id:7001})
    .end(function(err, res) {
        var response = (res.body.length)
        var expected = 2
        t.equal(response, expected)
        t.end()
    })
})

test('update a flat Id', function (t) {
  supertest(app)
    .put('/api/flatusers')
    .send({email:'pauline@eda.com', flat_id:7})
    .end(function(err, res) {
        var response = (res.body.length)
        var expected = 2
        t.equal(response, expected)
        app.get('knex').seed.run().then(function(){
          t.end()
        })
    })
})

test('close database connection', (t) => {
  app.get('knex').destroy()
  t.end()
})
