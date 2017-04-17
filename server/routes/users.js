var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .get(function (req, res) {
    db.getUsers()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .post(function (req, res) {
    db.addUser(req.body.name, req.body.email, req.body.hash, req.body.flat_id)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .put(function (req, res) {
    db.updateEmail(req.body.id, req.body.newEmail)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .delete(function (req, res) {
    db.delUser(req.body.id)
      .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })


module.exports = router
