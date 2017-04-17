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
  addBill: addBill,
  delBill: delBill,
  getShoppingListItems: getShoppingListItems,
  getUsers: getUsers,
  addUser: addUser,
  delUser: delUser,
  addBillAllocation: addBillAllocation,
  delBillAllocation: delBillAllocation
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

function addBill (flat_id, amount, bill) {
  return knex('bills')
  .insert({flat_id:flat_id, amount:amount, details:bill})
  .then(function(ids){
    return knex('bills')
    .where('id', ids[0])
    .first()
  })
}

function delBill (id) {
  return knex('bills')
    .where('id', id)
    .del()
    .then(function(){
      return knex('bills')
      .select()
    })
}

function getBillAllocations () {
  return knex('bill_allocations').select()
}

function addBillAllocation (bill_id, user_id, amount) {
  return knex('bill_allocations').insert({bill_id:bill_id, user_id:user_id, amount:amount})
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
  return knex('shopping_list_items')
    .insert({flat_id:flat_id, item:item})
    .then(function(ids){
      return knex('shopping_list_items')
      .where('id', ids[0])
      .first()
    })
}

function addUser (name, email, hash, flat_id) {
  return knex ('users').insert({name:name, email:email, hash:hash, flat_id:flat_id})
}

function delUser (id) {
  return knex('users')
    .where('id', id)
    .del()
}

function delShoppingListItem (id) {
  return knex('shopping_list_items')
    .where('id', id)
    .del()
    .then(function(){
      return knex('shopping_list_items')
      .select()
    })
}

function delEvent (id) {
  return knex('events')
    .where('id', id)
    .del()
}

function delBillAllocation (id) {
  return knex('bill_allocations')
    .where('id', id)
    .del()
}
