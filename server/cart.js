'use strict'

const db = require('APP/db')
const router = require('express').Router()
const SelectedBooks = db.model('selectedBooks')
const Order = db.model('orders')
const Book = db.model('books')


//+++++++++++ROUTE FOR LOADING SELECTED BOOKS TO THE CART++++++++
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


//++++++++++++++++++ROUTE FOR ADDING BOOK TO THE CART++++++++
router.post('/add', (req, res, next) => {
  let bookId = req.body.bookId;
  let orderId = req.body.orderId;
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
  .spread((selectedBook, created, anything) => {
    if (!created) {
      if (selectedBook) {
        return selectedBook.update({quantity: selectedBook.incrementQuantity()})
      } else {
        throw Error(404)
      }
    } else {
      res.status(201).send(created)
    }
  })
  .then( result => {
    res.status(201).send(result)
  })
  .catch(next)
})

//++++++++++++++++++ROUTE FOR UPDATING CART ON CHECKOUT++++++++
router.put('/checkout', (req, res, next) => {
  let cartUpdate = req.body.selected.map( cartItem => {
    let element = {
      order_id: cartItem.book.selectedBooks.order_id,
      book_id: cartItem.book.id,
      quantity: cartItem.quantity
    }
    return SelectedBooks.findOrCreate({
      where: {
      order_id: element.order_id,
      book_id: element.book_id
    },
    defaults: {
      order_id: element.order_id,
      book_id: element.book_id
    }
    })
    .spread((selectedBook, created) => {
      if (!created) {
        if (selectedBook) {
          return selectedBook.update({quantity: element.quantity})
        }
      } else {
        return created
      }
    })
    .catch(next)
  })
  Promise.all(cartUpdate)
  .then((success, rejected)   => {
    res.send(success)
  })
  .catch(console.log)
});

module.exports = router;
