const expect = require('chai').expect;
const db = require('APP/db');
const Review = require('./review');
const Book = require('./book');

describe ('book', () => {
  //clear the database before all tests
  before(function () {
    return db.sync({force: true});
  });

  // erase all tasks after each spec
  afterEach(function(){
    return db.sync({force: true});
  });

  describe('rating average getter function', () => {

  })
})
