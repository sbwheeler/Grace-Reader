'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const Promise = require('bluebird')
const router = require('express').Router()
const {adminOnly, selfOnly, mustBeLoggedIn, forbidden } = require('./auth.filters')

// ===================== Admin ==========================

// Admin get all orders
router.get('/admin', adminOnly, (req, res, next) =>
    Order.findAll()
    .then( foundOrders => {
      if (foundOrders) {
        return foundOrders
      } else {
        res.send(404)
      }
    })
    .then( foundOrders => {
      return Promise.map(foundOrders, foundOrder => foundOrder.getBooks())
    })
    .then( arrayOfOrdersOfBooks => {
      res.send(arrayOfOrdersOfBooks)
    })
    .catch(next))

// Admin get specific order
router.get('/admin/:orderId', adminOnly, (req, res, next) =>
    Order.findById(req.params.orderId)
    .then( foundOrder => {
      if (foundOrder) {
        return foundOrder.getBooks()
      } else {
        res.send(404)
      }
    })
    .then( foundBooks => {
      res.send(foundBooks)
    })
    .catch(next))

// Admin add order
router.post('/admin/', adminOnly, (req, res, next) =>
    Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next))

// Admin update cart
router.put('/admin/:orderId', adminOnly, (req, res, next) =>
    Order.update({
      books: req.body.books
    }, {
      where: {
        id: req.params.orderId
      }
    })
    .then((count, updated)  => {
      res.status(201).json(updated[0])
    })
    .catch(next))

// Admin delete order
router.delete('/admin/:orderId', adminOnly, (req, res, next) =>
    Order.destroy({
      where: {
        id: req.params.orderId
      }
    })
    .then( some => res.sendStatus(202))
    .catch(next));

// ========================= User ============================

// User get past orders
router.get('/:userId/', [mustBeLoggedIn, selfOnly('get your own past orders')], (req, res, next) => {
  let userId = req.params.userId;

  Order.findAll({
    where: {
      user_id: userId,
      isCart: false
    }
  })
  .then( foundOrders => {
    if (foundOrders) {
      return foundOrders
    } else {
      res.send(404)
    }
  })
  .then( foundOrders => {
    return Promise.map(foundOrders, foundOrder => foundOrder.getBooks())
  })
  .then( arrayOfOrdersOfBooks => {
    res.send(arrayOfOrdersOfBooks)
  })
  .catch(next)

})

// User get one order
router.get('/:userId/:orderId', [mustBeLoggedIn, selfOnly('get your own past order')], (req, res, next) => {
  let orderId = req.params.orderId;
  let userId = req.params.userId;

  Order.findById(orderId)
  .then( foundOrder => {
    if (foundOrder) {
      return foundOrder.getBooks()
    } else {
      res.send(404)
    }
  })
  .then( foundBooks => {
    res.send(foundBooks)
  })
  .catch(next)

})

module.exports = router
