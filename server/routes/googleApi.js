const express = require('express')
const router = express.Router()
const Lookup = require('../models/Lookup')

router.route('/places')
  .get((req, res) => {
    Lookup.getPlaces(req.query, res.handle)
  })

router.route('/textsearch')
  .get((req, res) => {
    Lookup.textSearch(req.query, res.handle)
  })

router.route('/autocomplete')
  .get((req, res) => {
    Lookup.autocomplete(req.query, res.handle)
  })

router.route('/geocode')
  .get((req, res) => {
    Lookup.geocode(req.query, res.handle)
  })

module.exports = router
