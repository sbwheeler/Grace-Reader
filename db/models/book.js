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
    allowNull: false
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
  // average: Sequelize.INTEGER
}, {
  getterMethods: {
    //pulls the average rating from reviews of the book
    ratingAverage: function() {
      return Review.findAll({
          attributes: ['rating'],
          where: {
            book_id: this.id
          }
        })
        .then(ratings => {
          const length = ratings.length;
          let ratingsArr = ratings.map(instance => instance.rating);
          return ratingsArr.reduce((a, b) => {
            return a + b; },0) / length;
        });
    }
  }
});

module.exports = Book;
