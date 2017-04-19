var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var bills = require('./routes/bills')
var events = require('./routes/events')
var flat = require('./routes/flat')
var flatUsers = require('./routes/flatusers')
var jobs = require('./routes/jobs')
var shoppingListItems = require('./routes/shoppingListItems')
var users = require('./routes/users')

var server = express()
var db = require('./db')
server.set('knex', db.knex)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(cors({origin: '*'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/bills', bills)
server.use('/api/events', events)
server.use('/api/flat', flat)
server.use('/api/flatusers', flatUsers)
server.use('/api/jobs', jobs)
server.use('/api/shopping_list_items', shoppingListItems)
server.use('/api/users', users)


module.exports = server
