var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .post(function (req, res) {
    db.updateAllocation(req.body.bill_id, req.body.amount).then(() => {
      res.send()
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })

module.exports = router
