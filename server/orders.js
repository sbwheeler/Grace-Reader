'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const router = require('express').Router()

router.get('/', (req, res, next) =>
    Order.findAll()
    .then(orders => res.json(orders))
    .catch(next))

router.get('/:id', (req, res, next) =>
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(next))

router.post('/', (req, res, next) =>
    Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next))


router.put('/:id', (req, res, next) =>
    Order.update({
      books: req.body.books
    }, {
      where: {
        id: req.params.id
      }
    })
    .then((count, updated)  => {
      console.log('this is updated', updated)
      res.status(201).json(updated[0])
    })
    .catch(next))

router.delete('/:id', (req, res, next) =>
    Order.destroy({
      where: {
        id: req.params.id
      }
    })
    .then( some => res.sendStatus(202))
    .catch(next));

module.exports = router
