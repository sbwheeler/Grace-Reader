const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Orders = require('APP/db/models/orders')
const app = require('./start')


describe('/api/orders', () => {
  describe('when not logged in', () => {
    it('GET / returns all orders', () =>
      request(app)
        .get(`/api/orders`)
        .expect(200)
    )

    it('POST creates a order', () =>
      request(app)
        .post('/api/orders')
        .send({
          books: [
          {id: 1, price: 1, quantity: 2},
          {id: 2, price: 5, quantity: 4}]
        })
        .expect(201)
    )

    it('PUT undates the element ', () =>
      request(app)
        .put('/api/orders/1')
        .send({books: [
          {id: 1, price: 1, quantity: 2},
          {id: 2, price: 5, quantity: 4}]
        })
        .then(res => expect(res.body).to.contain('test'))
    )

    it('DELETE removes an order', () =>
      request(app)
        .delete('/api/orders/:id')
        .expect(202)
    )
  })
})
