const request = require('supertest-as-promised')
const db = require('APP/db')
const SelectedBooks = require('APP/db/models/selectedBooks')
const Book = require('APP/db/models/book')
const Orders = require('APP/db/models/orders')
const app = require('./start')
const {expect} = require('chai')


describe('Cart Routes', () => {
  before('wait for the db', () => db.didSync);

  beforeEach('Make a Cart', () => {
    let booksProm = [{ title: 'Harry Potter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards' },
      { title: 'Game of Thrones', author: 'George RR Martin', genre: ['fantasy'], price: 25.00, description: 'a really violent book about dragons' },
      { title: 'Dune', author: 'Frank Herbert', genre: ['sci fi'], price: 10.95, description: 'sci fi book about a desert planet' },
      { title: 'Lord of the Rings', author: 'JRR Tolken', genre: ['fantasy', 'epic'], price: 11.95, description: 'book about wizards n stuff' },
      { title: 'Dune II', author: 'Frank Herbert', genre: ['sci fi', 'futuristic'], price: 10.95, description: 'boring sequel to dune' },
      { title: 'Dune II', author: 'Frank Herbert', genre: ['sci fi', 'futuristic'], price: 10.95, description: 'not as boring sequel to dune II' },
      { title: 'The Bible', author: 'Unknown', genre: ['religious', 'holy texts'], price: 30.05, description: 'its the bible' },
      { title: 'Cryptonomicon', author: 'Neal Stephenson', genre: ['sci fi', 'cryptography', 'futuristic'], price: 8.95, description: 'book about cryptography and stuff' }
      ].map(book => Book.create(book));
    let ordersProm = [
        {selected: [{id: 5, price: 5.00, quantity: 1}, {id: 3, price: 30.05, quantity: 100}]},
        {selected: [{id: 3, price: 19.95, quantity: 2}, {id: 5, price: 30.05, quantity: 100}]},
        {selected: [{id: 7, price: 19.95, quantity: 2}, {id: 8, price: 30.05, quantity: 10}]},
        {selected: [{id: 7, price: 19.95, quantity: 2}, {id: 1, price: 30.05, quantity: 100}]},
        {selected: [{id: 2, price: 11.95, quantity: 2}, {id: 2, price: 11.95, quantity: 100}]},
        {selected: [{id: 8, price: 11.95, quantity: 2}, {id: 6, price: 11.95, quantity: 100}]},
        {selected: [{id: 3, price: 11.95, quantity: 2}, {id: 6, price: 11.95, quantity: 100}]}
      ].map(order => Orders.create(order))

    return Promise.all(booksProm)
    .then( success => {
      return Promise.all(ordersProm)
    })
    .then( success => {
      return SelectedBooks.create({'order_id': 1, 'book_id': 1, quantity: 5})
    })
    .then( success => {
      return SelectedBooks.create({'order_id': 1, 'book_id': 2, quantity: 3})
    })
  })

  afterEach('Synchronize and clear database', () => db.sync({
    force: true
  }));

  describe('routing checks', () => {

    it('POST api/cart/add finds book if its already there and increments the quantity', () => {
       let book = {orderId: 1, bookId: 2};
       return request(app)
        .post(`/api/cart/add`)
        .send(book)
        .expect(201)
        .then(res => {
          expect(res.body.book_id).to.equal(2)
          expect(res.body.quantity).to.equal(4)
        })
    })

    it('POST api/cart/add adds book to the cart if it\'s not there yet', () => {
       let book = {orderId: 1, bookId: 3};
       return request(app)
        .post(`/api/cart/add`)
        .send(book)
        .expect(201)
        .then(res => {
          expect(res.body).to.equal(true)
        })
    })

    it('GET /api/cart/:orderId', () => {
       return request(app)
        .get(`/api/cart/1`)
        .expect(200)
        .then(res => {
          expect(res.body.length).to.equal(2)
        })
    })

    it('PUT /api/cart/checkout updates the ', () => {
      return request(app)
        .put('/api/cart/checkout')
        .send({"selected":[ {
          "book": {
          "ratingAverage": {
            "isFulfilled": false,
            "isRejected": false
          },
          "id": 6,
          "title": "Dune II",
          "author": "Frank Herbert",
          "genre": [
            "sci fi",
            "futuristic"
          ],
          "price": 10.95,
          "description": "not as boring sequel to dune II",
          "stockCount": 0,
          "imageUrl": "https://freeiconshop.com/files/edd/book-open-flat.png",
          "created_at": "2017-01-13T20:43:29.071Z",
          "updated_at": "2017-01-13T20:43:29.071Z",
          "selectedBooks": {
            "quantity": 2,
            "created_at": "2017-01-13T20:43:29.154Z",
            "updated_at": "2017-01-13T20:43:29.154Z",
            "order_id": 4,
            "book_id": 6
          }
        },
        "quantity": 40
      },
      {
          "book":{
            "ratingAverage": {
              "isFulfilled": false,
              "isRejected": false
            },
            "id": 7,
            "title": "The Bible",
            "author": "Unknown",
            "genre": [
              "religious",
              "holy texts"
            ],
            "price": 30.05,
            "description": "its the bible",
            "stockCount": 0,
            "imageUrl": "https://freeiconshop.com/files/edd/book-open-flat.png",
            "created_at": "2017-01-13T20:43:29.071Z",
            "updated_at": "2017-01-13T20:43:29.071Z",
            "selectedBooks": {
              "quantity": 1,
              "created_at": "2017-01-13T20:43:29.154Z",
              "updated_at": "2017-01-13T20:43:29.154Z",
              "order_id": 4,
              "book_id": 7
            }
          },
          "quantity": 30
        },
        {"book":{
          "ratingAverage": {
            "isFulfilled": false,
            "isRejected": false
          },
          "id": 5,
          "title": "Lord of the Rings",
          "author": "JRR Tolken",
          "genre": [
            "fantasy",
            "epic"
          ],
          "price": 11.95,
          "description": "book about wizards n stuff",
          "stockCount": 0,
          "imageUrl": "https://freeiconshop.com/files/edd/book-open-flat.png",
          "created_at": "2017-01-13T20:43:29.070Z",
          "updated_at": "2017-01-13T20:43:29.070Z",
          "selectedBooks": {
            "quantity": 1,
            "created_at": "2017-01-13T20:43:29.154Z",
            "updated_at": "2017-01-13T20:43:29.154Z",
            "order_id": 4,
            "book_id": 5
          }
        },
        "quantity": 50
      }
    ]
    })
        .expect(200)
        .then(res => {
          expect(res.body.length).to.equal(3)
        })
    })
  })
})
