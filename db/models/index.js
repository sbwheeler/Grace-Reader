'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Book = require('./book');
const Review = require('./review');
const Order = require('./orders');

Review.belongsTo(Book);
Book.hasMany(Review);

module.exports = { User, Book, Review, Order }
