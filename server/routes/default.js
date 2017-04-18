var express = require('express')
var router = express.Router()

var db = require('../db')

module.exports = {
  get,
  add,
  save,
  login,
  logout
}

function get (req, res) {
  db.getUsers()
    .then(users => {
      res.render('index', {
        users: users,
        isLoggedIn: req.user,
        flash: req.flash('status')
      })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function add (req, res) {
  res.render('add')
}

function save (req, res) {
  const user = req.body
  db.addUser(user)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function login (req, res) {
  res.render('login')
}

function logout (req, res) {
  req.logout()
  req.flash('status', 'Logged out')
  res.redirect('/')
}
