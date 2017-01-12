'use strict'

const db = require('APP/db')
const router = require('express').Router()
const Review = db.model('reviews')

router.get('/', (req, res, next) => {
  Review.findAll()
  .then(allReviews => {
    res.send(allReviews)
  })
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Review.findById(req.params.id)
  .then(foundReview => {
    res.send(foundReview)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then(createdReview => {
    res.status(201).send(createdReview)
  })
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  Review.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(updatedReview => {
    res.send(updatedReview[1][0])
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Review.destroy({
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(() => {
    res.sendStatus(204)
  })
  .catch(next)
})

module.exports = router
