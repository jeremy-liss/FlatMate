var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .post(function (req, res) {
    db.addEvent(1001, req.body.date, req.body.event).then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })

module.exports = router
