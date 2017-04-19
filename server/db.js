var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  addEvent: addEvent,
  addShoppingListItem: addShoppingListItem,
  delShoppingListItem: delShoppingListItem,
  delEvent: delEvent,
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
  updateEmail: updateEmail,
  updateFlatId: updateFlatId,
  getFlatUsers: getFlatUsers,
  updateJobs: updateJobs
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
    .select()
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

function getEvents () {
  return knex('events').select()
}

function addEvent (flat_id, date, event) {
  return knex('events')
    .insert({flat_id:flat_id, date:date, event:event})
    .then(function(){
      return knex('events')
      .select()
    })
}

function getShoppingListItems() {
  return knex('shopping_list_items').select()
}

function addShoppingListItem (flat_id, item) {
  return knex('shopping_list_items')
    .insert({flat_id:flat_id, item:item})
    .then(function(){
      return knex('shopping_list_items')
      .select()
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
    .then(function(){
      return knex('events')
      .select()
    })
}

function updateEmail (id, newEmail) {
  return knex('users')
    .where('id', id)
    .update({'email': newEmail})
    .then(function(){
      return knex('users')
      .where('flat_id', 1001)
      .select()
    })
}

function updateFlatId (email, flatId) {
  return knex('users')
    .where('email', email)
    .update({'flat_id': flatId})
    .then(function(){
      return knex('users')
      .where('flat_id', 1001)
      .select()
    })
}

function updateJobs (userId, job) {
  return knex('jobs')
    .where('user_id', userId)
    .update({'job': job})
}

function getFlatUsers () {
  return knex('users')
    .where('flat_id', 1001)
    .select()
}
