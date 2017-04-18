const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//authentication
const hbs = require('express-handlebars')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const flash = require('connect-flash')
const FacebookStrategy = require('passport-facebook')
const passport = require('passport')

const auth = require('./routes/auth')

const flat = require('./routes/flat')
const users = require('./routes/users')
const bills = require('./routes/bills')
const jobs = require('./routes/jobs')
const billAllocations = require('./routes/billAllocations')
const events = require('./routes/events')
const addEvent = require('./routes/addEvent')
const shoppingListItems = require('./routes/shoppingListItems')
const roster = require('./routes/roster')
const addShoppingListItem = require('./routes/addShoppingListItem')
const updateFlatId = require('./routes/updateFlatId')
const addBillAllocation = require('./routes/addBillAllocation')
const flatUsers = require('./routes/flatusers')

const server = express()
//middleware
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

//routes
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
server.use('/api/delShoppingListItem', shoppingListItems)
server.use('/api/delEvent', events)
server.use('/api/addUser', users)
server.use('/api/delUser', users)
server.use('/api/updateEmail', users)
server.use('/api/updateflatid', updateFlatId)
server.use('/api/addBillAllocation', addBillAllocation)
server.use('/api/delBillAllocation', billAllocations)
server.use('/api/flatusers', flatUsers)

//authentication

server.get('/', auth.get)
server.get('/login', auth.login)
server.get('/logout', auth.logout)
server.get('/add', ensureLoggedIn(), auth.add)
server.post('/add', ensureLoggedIn(), auth.save)

server.get('/auth/facebook', passport.authenticate('facebook'))
server.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    req.flash('status', 'Logged in')
    res.redirect('/')
  }
)

module.exports = server
