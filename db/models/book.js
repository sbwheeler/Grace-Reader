const db = require('APP/db');
const Sequelize = require('sequelize');
const Review = require('./review');

const Book = db.define('books', {
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  author: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  genre: Sequelize.ARRAY(Sequelize.STRING),
  price: {
    type: Sequelize.FLOAT,
    validate: {
      allowNull: false
    }
  },
  description: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true
    }
  },
  stockCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://freeiconshop.com/files/edd/book-open-flat.png',
    validate: {
      isUrl: true
    }
  }
},
{
  getterMethods: {
    //pulls the average rating from reviews of the book
    ratingAverage: function() {
      let average;
      Review.findAll({
        attributes: ['rating'],
        where: {
          bookId: this.id
        }
      })
      .then(ratings => {
        console.log(ratings);
      })

      return average || 0;
    }
  }
});

module.exports = Book;
