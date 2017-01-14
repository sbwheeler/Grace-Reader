'use strict'

const db = require('APP/db')
const router = require('express').Router()
const SelectedBooks = db.model('selectedBooks')
const Order = db.model('orders')
const Book = db.model('books')

router.get('/:orderId', (req, res, next) => {
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
});

router.post('/add', (req, res, next) => {
  let bookId = req.body.bookId;
  let orderId = req.body.orderId;
  console.log(bookId, orderId, req.body)
  SelectedBooks.findOrCreate({
    where: {
      order_id: orderId,
      book_id: bookId
    },
    defaults: {
      order_id: orderId,
      book_id: bookId
    }
  })
  .spread((selectedBook, created) => {
    res.send(200)
    console.log('This is SELECTED BOOK:', selectedBook, 'This is CREATED SELECTED BOOK:', created);
  })

  // Book.findById(bookId)
  // .then( foundBook => {

  // })
  // SelectedBooks.findOrCreate();
})


module.exports = router;
