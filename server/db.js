var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  addEvent: addEvent,
  addShoppingListItem: addShoppingListItem,
  delShoppingListItem: delShoppingListItem,
  delEvent: delEvent,
  getBillAllocations: getBillAllocations,
  getBills: getBills,
  getEvents: getEvents,
  getFlat: getFlat,
  getJobs: getJobs,
  getRoster:  getRoster,
  getShoppingListItems: getShoppingListItems,
  getUsers: getUsers
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
  return knex('events').select()
}

function addEvent (flat_id, date, event) {
  return knex('events').insert({flat_id:flat_id, date:date, event:event})
}

function getShoppingListItems() {
  return knex('shopping_list_items').select()
}

function addShoppingListItem (flat_id, item) {
  return knex('shopping_list_items').insert({flat_id:flat_id, item:item})
}

function delShoppingListItem () {
  return knex('shopping_list_items')
    .where('item', null)
    .del()
}

function delEvent () {
  return knex('events')
    .where('event', null)
    .del()
}
