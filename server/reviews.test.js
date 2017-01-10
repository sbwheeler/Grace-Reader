const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Review = require('APP/db/models/review')
const app = require('./start')

describe.only('Review routes', () => {
  before('wait for the db', () => db.didSync);

  beforeEach(() => {
    return Review.create({
      rating: 3.5,
      content: 'LOLOLOLOLOLOLOLOLOLOL. SO FUNNY.'
    })
  })

  afterEach(() => {
    return db.sync({force: true});
  })

  it('GET gets all review', () => {
    return request(app)
      .get('/api/reviews')
      .expect(200)
      .then(res => {
        expect(res.body.length).to.equal(1)
      });
  })

  it('POST creates a review', () => {
    return request(app)
      .post('/api/reviews')
      .send({
        rating: 5.0,
        content: 'This movie was good, really good. I mean really really REALLY good.'
      })
      .expect(201)
      .then(res => {
        expect(res.body.rating).to.equal(5.0)
        expect(res.body.content).to.equal('This movie was good, really good. I mean really really REALLY good.')
      })
  })

  it('PUT updates a review', () => {
    return request(app)
      .put('/api/reviews/1')
      .send({
        rating: 4.7,
        content: 'I love this movie. It was awesome. Best. Movie. Ever.'
      })
      .expect(200)
      .then(res => {
        expect(res.body.rating).to.equal(4.7)
        expect(res.body.content).to.equal('I love this movie. It was awesome. Best. Movie. Ever.')
      })
  })

  it('DELETE deletes a review', () => {
    return request(app)
        .delete('/api/reviews/1')
        .expect(204)
  })
})
