'use strict';

const db = require('APP/db')
const SelectedBooks = require('./selectedBooks')
const {expect} = require('chai')
const Orders = require('./orders')
const Book = require('./book');

describe.only('selectedBooks', () => {
  before('wait for the db', () => db.didSync);

  beforeEach(function() {
    return Orders.create({
        selected: [
          {id: 1, price: 1.00, quantity: 1},
          {id: 2, price: 2.00, quantity: 2},
          {id: 3, price: 3.21, quantity: 3}
        ]
      }).then( response => {
        return Promise.all([
          Book.create({ title: 'Harry Potter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards' }),
          Book.create({ title: 'Harry Ter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards' }),
          Book.create({ title: 'Hry Potter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards' })
        ])
      }).then( response => {
        return Promise.all([
          SelectedBooks.create({'order_id': 1, 'book_id': 1, quantity: 5}),
          SelectedBooks.create({'order_id': 1, 'book_id': 2, quantity: 2})
          ]);
      })
  });

  afterEach(function(){
    return db.sync({force: true});
  });

  describe('hooks', () => {

    describe('beforeCreate', () => {
      it('gets an items from database', () => {
        return SelectedBooks.findAll({
          where: {
            'order_id': 1
          }
        })
          .then(foundSelectedBooks => {
            expect(foundSelectedBooks[0].quantity).to.equal(5)
          })
      })
    })

  });

});
