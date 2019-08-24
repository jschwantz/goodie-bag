'use strict'

const router = require('express').Router()
const Candy = require('../db/models/Candy')

router.get('/', async (req, res, next) => {
  const candies = await Candy.findAll();
  res.json(candies);
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router
