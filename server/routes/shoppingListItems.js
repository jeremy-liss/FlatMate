var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .get(function (req, res) {
    db.getShoppingListItems().then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .post(function (req, res) {
    db.addShoppingListItem(1001, req.body.item).then((item) => {
      res.send(item)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })
  .delete(function (req, res) {
    db.delShoppingListItem(req.body.id).then((result) => {
      console.log(result)
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })


module.exports = router
