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
  getShoppingListItems: getShoppingListItems
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
