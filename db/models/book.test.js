const { expect } = require('chai');
const db = require('APP/db');
const { Review, Book } = require('./index');

//BASIC TESTING FOR BOOKS AND REVIEWS

describe('Book model', () => {
  //have not implemented validation tests for the books / review models however manual testing shows the validations are working
  before('wait for the db', () => db.didSync);

  afterEach(function() {
    return db.sync({ force: true });
  });

  describe('Rating average getter function', () => {
    beforeEach(function() {
      return Promise.all([
        Book.create({ title: 'Harry Potter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards' }),
        Review.create({ rating: 4.5, content: 'this book was pretty good', 'book_id': 1 }),
        Review.create({ rating: 2, content: 'this book was alright but i thought hagrid was overrated', 'book_id': 1 })
      ]);
    });

    it('returns the average of the ratings for that book', () => {
      return Book.findById(1)
        .then(foundBook => {
          //getter methods do NOT get invoked, and this getter method returns a promise
          return foundBook.ratingAverage;
        })
        .then(avg => {
          expect(avg).to.equal(3.25);
        });
    });
  });

  describe('Book and review association', () => {
    it('review belongs to a book using the setBook method', () => {
      const createdBook = Book.create({ title: 'Harry Potter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards' });
      const createdReview = Review.create({ rating: 4.5, content: 'this book was pretty good' });

      return Promise.all([createdBook, createdReview])
        .then((result) => {
          const book = result[0];
          const review = result[1];
          return review.setBook(book);
        })
        .then(() => {
          return Review.findOne({
            where: { rating: 4.5 },
            include: { model: Book, as: 'book' }
          });
        })
        .then(foundReview => {
          expect(foundReview.book).to.exist;
          expect(foundReview.book.title).to.equal('Harry Potter');
        });
    });
  });
});
