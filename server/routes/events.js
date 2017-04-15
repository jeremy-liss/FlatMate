var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .get(function (req, res) {
    db.getEvents().then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .delete(function (req, res) {
    db.delEvent().then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })


module.exports = router
