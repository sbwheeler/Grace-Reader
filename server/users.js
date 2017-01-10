'use strict'

const db = require('APP/db')
const User = db.model('users')
const { mustBeLoggedIn, forbidden } = require('./auth.filters')
const express = require('express')
const router = express.Router();

module.exports = router;

router.get('/', forbidden('only admins can list users'), (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
})

router.get('/:id', mustBeLoggedIn, (req, res, next) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next)
})

//implement so only admins can delete or users can delete themselves?
router.delete('/:id', mustBeLoggedIn, (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.sendStatus(204);
  })
  .catch(next)
})
