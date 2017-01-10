const db = require('APP/db')
const Book = require('APP/db/models').Book;
const Review = require('APP/db/models').Review;

const seedUsers = () => db.Promise.map([
  {firstName: 'Peter', lastName: 'Carlson', email: 'god@example.com', password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', password: '1234'},
  {firstName: 'Michelle', lastName: 'Obama', email: 'michelle@example.gov', password: '1234'},
  {firstName: 'Damon', lastName: 'Ye', email: 'sam@example.gov', password: '1234'},
  {firstName: 'Sam', lastName: 'Wheeler', email: 'damon@example.gov', password: '1234'},
  {firstName: 'John', lastName: 'Yom', email: 'john@example.gov', password: '1234'},
  {firstName: 'Bogdon', lastName: 'Notsure', email: 'bogdon@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedOrders = () => db.Promise.map([
  {books: [{id: 5, price: 5.00, quantity: 1}, {id: 3, price: 30.05, quantity: 100}]},
  {books: [{id: 3, price: 19.95, quantity: 2}, {id: 5, price: 30.05, quantity: 100}]},
  {books: [{id: 7, price: 19.95, quantity: 2}, {id: 8, price: 30.05, quantity: 10}]},
  {books: [{id: 7, price: 19.95, quantity: 2}, {id: 1, price: 30.05, quantity: 100}]},
  {books: [{id: 2, price: 11.95, quantity: 2}, {id: 2, price: 11.95, quantity: 100}]},
  {books: [{id: 8, price: 11.95, quantity: 2}, {id: 6, price: 11.95, quantity: 100}]},
  {books: [{id: 3, price: 11.95, quantity: 2}, {id: 6, price: 11.95, quantity: 100}]}
], order => db.model('orders').create(order))

const seedBooks = () => db.Promise.map([
  { title: 'Harry Potter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards' },
  { title: 'Game of Thrones', author: 'George RR Martin', genre: ['fantasy'], price: 25.00, description: 'a really violent book about dragons' },
  { title: 'Dune', author: 'Frank Herbert', genre: ['sci fi'], price: 10.95, description: 'sci fi book about a desert planet' },
  { title: 'Lord of the Rings', author: 'JRR Tolken', genre: ['fantasy', 'epic'], price: 11.95, description: 'book about wizards n stuff' },
  { title: 'Dune II', author: 'Frank Herbert', genre: ['sci fi', 'futuristic'], price: 10.95, description: 'boring sequel to dune' },
  { title: 'Dune II', author: 'Frank Herbert', genre: ['sci fi', 'futuristic'], price: 10.95, description: 'not as boring sequel to dune II' },
  { title: 'The Bible', author: 'Unknown', genre: ['religious', 'holy texts'], price: 30.05, description: 'its the bible' },
  { title: 'Cryptonomicon', author: 'Neal Stephenson', genre: ['sci fi', 'cryptography', 'futuristic'], price: 8.95, description: 'book about cryptography and stuff' },
  ], book => db.model('books').create(book))

const seedReviews = () => db.Promise.map([
  {rating: 3.2, content: 'ok but i didnt love it', 'book_id': 1},
  {rating: 5.0, content: 'GREAT GREAT GREAT', 'book_id': 2},
  {rating: 5.0, content: 'GREAT GREAT GREAT', 'book_id': 8},
  {rating: 3.5, content: 'i thought this book was good', 'book_id': 5},
  {rating: 3.5, content: 'i thought this book was good', 'book_id': 2},
  {rating: 3.5, content: 'i thought this book was good', 'book_id': 7},
  {rating: 2.5, content: 'this book was alright but ive read better ones', 'book_id': 2},
  {rating: 2.5, content: 'this book was alright but ive read better ones', 'book_id': 2},
  {rating: 2.5, content: 'this book was alright but ive read better ones', 'book_id': 8},
  {rating: 4.1, content: 'pretty awesome i loved it', 'book_id': 7},
  {rating: 4.1, content: 'pretty awesome i loved it', 'book_id': 6},
  {rating: 4.1, content: 'pretty awesome i loved it', 'book_id': 3},
  {rating: 1.0, content: 'meh meh meh this book was meh', 'book_id': 5},
  {rating: 1.8, content: 'meh meh meh this book was meh', 'book_id': 4},
  {rating: 1.9, content: 'meh meh meh this book was meh', 'book_id': 1},
  {rating: 1.7, content: 'very disappointing book', 'book_id': 4},
  {rating: 1.5, content: 'very disappointing book', 'book_id': 3}
], review => db.model('reviews').create(review))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedBooks)
  .then(books => console.log(`Seeded ${books.length} books OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
