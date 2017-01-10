'use strict';

const db = require('APP/db')
const Orders = require('./orders')
const {expect} = require('chai')

describe('book', () => {
  before('wait for the db', () => db.didSync);

  beforeEach(function() {
    return Orders.create({
        books: [
          {id: 1, price: 1.00, quantity: 1},
          {id: 2, price: 2.00, quantity: 2},
          {id: 3, price: 3.21, quantity: 3}
        ]
      })
  });

  afterEach(function(){
    return db.sync({force: true});
  });

  describe('hooks', () => {

    describe('beforeCreate', () => {
      it('sets total price to correct value', () => {
        return Orders.findById(1)
          .then(foundOrder => {
            expect(foundOrder.total).to.equal(14.63)
          })
      })
    })

  });

});
