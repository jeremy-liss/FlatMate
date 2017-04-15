var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var flat = require('./routes/flat')
var users = require('./routes/users')
var bills = require('./routes/bills')
var jobs = require('./routes/jobs')
var billAllocations = require('./routes/billAllocations')
var events = require('./routes/events')
var addEvent = require('./routes/addEvent')
var shoppingListItems = require('./routes/shoppingListItems')
var roster = require('./routes/roster')
var addShoppingListItem = require('./routes/addShoppingListItem')


var server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/flat', flat)
server.use('/api/users', users)
server.use('/api/bills', bills)
server.use('/api/jobs', jobs)
server.use('/api/bill_allocations', billAllocations)
server.use('/api/events', events)
server.use('/api/addEvent', addEvent)
server.use('/api/shopping_list_items', shoppingListItems)
server.use('/api/roster', roster)
server.use('/api/addShoppingListItem', addShoppingListItem)
server.use('/api/delShoppingListItem', shoppingListItems)
server.use('/api/delEvent', events)

module.exports = server
