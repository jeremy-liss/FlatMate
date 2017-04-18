var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .get(function (req, res) {
    db.getBills().then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .post(function (req, res) {
    db.addBill(1001, req.body.amount, req.body.bill).then((bill) => {
      res.send(bill)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .delete(function (req, res) {
    db.delBill(req.body.id).then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })

module.exports = router
