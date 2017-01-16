'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/orders', require('./orders'))
  .use('/cart', require('./cart'))
  .use('/reviews', require('./reviews'))
  .use('/books', require('./book'))

// Send along any errors
api.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
