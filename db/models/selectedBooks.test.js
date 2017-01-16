'use strict';

const db = require('APP/db')
const SelectedBooks = require('./selectedBooks')
const {expect} = require('chai')
const Orders = require('./orders')
const Book = require('./book');

describe('selectedBooks', () => {
  before('wait for the db', () => db.didSync);

  beforeEach(function() {
    return  db.Promise.map([
  {'order_id': 1, 'book_id': 1, quantity: 5},
  {'order_id': 2, 'book_id': 1, quantity: 2},
  {'order_id': 3, 'book_id': 4, quantity: 3},
  {'order_id': 4, 'book_id': 5, quantity: 1},
  {'order_id': 4, 'book_id': 6, quantity: 2},
  {'order_id': 4, 'book_id': 7, quantity: 1},
  {'order_id': 1, 'book_id': 4, quantity: 7}], selectedBook => db.model('selectedBooks').create(selectedBook))
  });

  afterEach(function(){
    return db.sync({force: true});
  });

  describe('hooks', () => {

    describe('beforeCreate', () => {
      it('gets an items from database', () => {
        return SelectedBooks.findOne({
          where: {
            'order_id': 1,
            'book_id': 1
          }
        })
          .then(foundSelectedBooks => {
            expect(foundSelectedBooks.quantity).to.equal(5)
          })
      })
    })

  });

});
