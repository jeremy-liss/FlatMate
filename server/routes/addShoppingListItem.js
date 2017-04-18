var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .post(function (req, res) {
    db.addShoppingListItem(1001, req.body.item).then(() => {
      res.send()
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })

module.exports = router