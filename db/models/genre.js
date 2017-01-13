// const db = require('APP/db');
// const Sequelize = require('sequelize');
// const Review = require('./review');
// const Book = require('./book');

// const Genre = db.define('genres', {
//   category: {
//     type: Sequelize.STRING,
//     validate: {
//       notEmpty: true
//     }
//   },

//   // average: Sequelize.INTEGER
// }, {
//   getterMethods: {
//     //pulls the average rating from reviews of the book
//     ratingAverage: function() {
//       return Review.findAll({
//           attributes: ['rating'],
//           where: {
//             book_id: this.id
//           }
//         })
//         .then(ratings => {
//           const length = ratings.length;
//           let ratingsArr = ratings.map(instance => instance.rating);
//           return ratingsArr.reduce((a, b) => {
//             return a + b; },0) / length;
//         });
//     }
//   }
// });

// module.exports = Book;
