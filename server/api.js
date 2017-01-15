'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/orders', require('./orders'))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/reviews', require('./reviews'))
  .use('/books', require('./book'))
  .use('/cart', require('./cart'))

// Send along any errors
api.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
