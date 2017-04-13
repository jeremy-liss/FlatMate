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
var shoppingListItems = require('./routes/shoppingListItems')

var server = express()

server.use(bodyParser.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/flat', flat)
server.use('/api/users', users)
server.use('/api/bills', bills)
server.use('/api/jobs', jobs)
server.use('/api/bill-allocations', billAllocations)
server.use('/api/events', events)
server.use('/api/shopping-list-items', shoppingListItems)

module.exports = server
