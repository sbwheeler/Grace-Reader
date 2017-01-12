'use strict'

const db = require('APP/db');
const Book = db.model('books');
const Review = db.model('reviews');
const router = require('express').Router()

router.get('/', (req, res, next) => {
  Book.findAll()
  .then(foundBooks => res.send(foundBooks))
  .catch(next)
})

router.get('/:bookId', (req, res, next) => {
  Book.findOne({
    where: {
      id: req.params.bookId
    },
    include: [{model: Review,
      where: { book_id: req.params.bookId }
    }]
  })
  .then(foundBook => {
    res.send(foundBook)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Book.create(req.body)
  .then(createdBook => res.status(201).send(createdBook))
  .catch(next)
})

router.delete('/:bookId', (req, res, next) => {
  Book.destroy({
    where: {
      id: req.params.bookId
    },
    returning: true
  })
  .then(destroyedBook => {
    res.sendStatus(204)
  })
  .catch(next)
})

router.put('/:bookId', (req, res, next) => {
  Book.update(req.body, {
    where: {
      id: req.params.bookId
    },
    returning: true
  })
  .then(updatedBook => {
    res.send(updatedBook[1][0])
  })
  .catch(next)
})

module.exports = router;
