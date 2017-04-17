var express = require('express')
var router = express.Router()

var db = require('../db')

router.route('/')
  .put(function (req, res) {
    db.updateFlatId(req.body.email, req.body.flat_id).then((result) => {
      res.send(result)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  })

module.exports = router
