'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Book = require('./book');
const Review = require('./review');
const Order = require('./orders');
const SelectedBooks = require('./selectedBooks')

Review.belongsTo(Book);
Book.hasMany(Review);

Order.belongsTo(User);
User.hasMany(Order);

Order.belongsToMany(Book, { through: SelectedBooks});
Book.belongsToMany(Order, { through: SelectedBooks});


module.exports = { User, Book, Review, Order }

