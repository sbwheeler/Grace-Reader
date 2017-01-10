'use strict';

const db = require('APP/db');
const Sequelize = require('sequelize');

const Review = db.define('reviews', {
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    validate: {
      len: {
        args: 10,
        msg: 'Review must be at least 10 characters in length'
      },
      notEmpty: true
    }
  }
});

module.exports = Review;
