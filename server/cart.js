'use strict'

const db = require('APP/db')
const router = require('express').Router()
const SelectedBooks = db.model('selectedBooks')
const Order = db.model('orders')
const Book = db.model('books')


//+++++++++++ROUTE FOR LOADING SELECTED BOOKS TO THE CART++++++++

// api/cart/:userId

router.get('/:userId', (req, res, next) => {
  let userId = req.params.userId;

  Order.findOne({
    where: {
      user_id: userId,
      isCart: true
    }
  })
  .then( foundOrders => {
    if (foundOrders) {
      return foundOrders.getBooks()
    } else {
      res.send(404)
    }
  })
  .then( foundBook => {
    res.send(foundBook)
  })
  .catch(next)

})


//++++++++++++++++++ROUTE FOR ADDING BOOK TO THE CART++++++++
router.put('/:userId/', (req, res, next) => {
  let bookId = req.body.bookId;

  Order.findOne({
    where: {
      user_id: req.params.userId,
      isCart: true
    }
  })
  .then( cart => {
    return cart.addBook(bookId)
    .then( book => {
      return [book, cart.id]
    })
  })
  .then( book => {
    if (book[0].length === 0) {
      return SelectedBooks.findOne({
        where: {
          order_id: book[1],
          book_id: bookId
        }
      })
      .then( selectedBook => {
        selectedBook.update({quantity: selectedBook.incrementQuantity()})
      })
    } else {
      res.send(book[0])
    }
  })
  .then( () => {
    res.sendStatus(201)
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

//++++++++++++++++++ROUTE FOR DELETTING BOOK FROM CART++++++++
router.delete('/:orderId/:bookId', (req, res, next) => {
  SelectedBooks.findOne({
    where: {
      order_id: req.params.orderId,
      book_id: req.params.bookId
    }
  })
  .then( foundSelection => {
    return foundSelection.destroy()
  })
  .then( deleted => {
    res.send(deleted + '')
  })
  .catch(next)
});


module.exports = router;
