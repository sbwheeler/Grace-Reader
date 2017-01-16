'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const router = require('express').Router()

// ===================== Admin ==========================

// Admin get all orders
router.get('/', (req, res, next) =>
    Order.findAll()
    .then(orders => res.json(orders))
    .catch(next))

// Admin get specific order
router.get('/:orderId', (req, res, next) =>
    Order.findById(req.params.orderId)
    .then(order => res.json(order))
    .catch(next))

// Admin add order
router.post('/', (req, res, next) =>
    Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next))

// Admin update cart
router.put('/:orderId', (req, res, next) =>
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
router.delete('/:orderId', (req, res, next) =>
    Order.destroy({
      where: {
        id: req.params.orderId
      }
    })
    .then( some => res.sendStatus(202))
    .catch(next));

// ========================= User ============================

// User get past orders
router.get('/:orderId/:userId', (req, res, next) => {
  let orderId = req.params.orderId;
  Order.findById(orderId)
  .then( foundOrder => {
    if (foundOrder) {
      return foundOrder
    } else {
      res.send(404)
    }
  })
  .then( foundOrder => {
    return foundOrder.getBooks()
    .then( cartBooks => {
      return cartBooks
    })
    .catch(next)
  })
  .then( cartBooks => {
    res.send(cartBooks)
  })
  .catch(next)
})

// User get one order
router.get('/:orderId/:userId', (req, res, next) => {})

module.exports = router
