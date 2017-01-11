const request = require('supertest-as-promised')
const db = require('APP/db')
const Book = require('APP/db/models/book')
const app = require('./start')
const {expect} = require('chai')

// EI: clean up `describe.only` before committing to master
describe('Book Routes', () => {
  before('wait for the db', () => db.didSync);

  beforeEach('Make a Book', () => {
    return Book.create({
      title: 'Harry Potter',
      author: 'J.K Rowling',
      genre: ['sci-fi'],
      price: 15.00,
      description: 'a book about some dude that becomes a wizard',
      stockCount: 2,
      imageUrl: 'http://www.chestersu.com/wp-content/uploads/2013/01/241153480-30235112.jpg'
    })
  })

  afterEach('Synchronize and clear database', () => db.sync({
    force: true
  }));

  describe('routing checks', () => {
    it('GET /api/books', () => {
       return request(app)
        .get(`/api/books`)
        .expect(200)
        .then(res => {
          expect(res.body.length).to.equal(1)
          expect(res.body).to.be.instanceof(Array)
        })
    })
    it('POST /api/books', () => {
      return request(app)
        .post('/api/books')
        .send({
          title: 'Enders Game',
          author: 'Orsen Scott Card',
          genre: ['sci-fi'],
          price: 12.00,
          description: 'Book about futuristic military and children',
          stockCount: 3,
          imageUrl: 'http://www.chestersu.com/wp-content/uploads/2013/01/241153480-30235112.jpg'
        })
        .expect(201)
        .then(res => {
          expect(res.body.title).to.equal('Enders Game')
          expect(res.body.price).equal(12.00)
        })
    })
    it('PUT /api/books', () => {
      return request(app)
        .put('/api/books/1')
        .send({
          stockCount: 6
        })
        .expect(200)
        .then(res => {
          expect(res.body.stockCount).to.equal(6)
        })
    })
    it('DELETE /api/delete', () => {
      return request(app)
        .delete('/api/books/1')
        .expect(204)
    })
  })
})

