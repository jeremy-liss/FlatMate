var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getUsers: getUsers,
  getFlat: getFlat,
  getFlat: getFlat,
  getJobs: getJobs,
  getBills: getBills,
  getBillAllocations: getBillAllocations,
  getEvents: getEvents,
  getShoppingListItems: getShoppingListItems,
  addShoppingListItem: addShoppingListItem,
  getRoster:  getRoster
}

function getUsers () {
  return knex('users').select()
}

function getFlat () {
  return knex('flat').select()
}

function getJobs () {
  return knex('jobs').select()
}

function getRoster() {
  return knex('jobs')
    .join('users', 'users.id', '=', 'jobs.user_id')
}

function getBills () {
  return knex('bills').select()
}

function getBillAllocations () {
  return knex('bill_allocations').select()
}

function getEvents () {
  return knex('Events').select()
}

function getShoppingListItems() {
  return knex('shopping_list_items').select()
}

function addShoppingListItem (item) {
  return knex('shopping_list_items').insert({flat_id:1001, item: item})
}
