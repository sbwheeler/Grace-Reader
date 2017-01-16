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
  {selected: [{id: 5, price: 5.00, quantity: 1}, {id: 3, price: 30.05, quantity: 100}]},
  {selected: [{id: 3, price: 19.95, quantity: 2}, {id: 5, price: 30.05, quantity: 100}]},
  {selected: [{id: 7, price: 19.95, quantity: 2}, {id: 8, price: 30.05, quantity: 10}]},
  {selected: [{id: 7, price: 19.95, quantity: 2}, {id: 1, price: 30.05, quantity: 100}]},
  {selected: [{id: 2, price: 11.95, quantity: 2}, {id: 2, price: 11.95, quantity: 100}]},
  {selected: [{id: 8, price: 11.95, quantity: 2}, {id: 6, price: 11.95, quantity: 100}]},
  {selected: [{id: 3, price: 11.95, quantity: 2}, {id: 6, price: 11.95, quantity: 100}]}
], order => db.model('orders').create(order))

const seedBooks = () => db.Promise.map([
  { title: 'Harry Potter', author: 'JK Rowling', genre: ['fantasy'], price: 19.95, description: 'a book about wizards', imageUrl: 'http://prodimage.images-bn.com/pimages/9780545139700_p0_v4_s1200x630.jpg' },
  { title: 'Game of Thrones', author: 'George RR Martin', genre: ['fantasy'], price: 25.00, description: 'a really violent book about dragons', imageUrl: 'https://03fcd67fd51850d3ba6b-6cb392df11a341bce8c76b1898d0c030.ssl.cf3.rackcdn.com/large/9780/0074/9780007448036.jpg' },
  { title: 'Dune', author: 'Frank Herbert', genre: ['sci fi'], price: 10.95, description: 'sci fi book about a desert planet', imageUrl: 'https://writingishardwork.files.wordpress.com/2016/04/dune.jpg' },
  { title: 'Lord of the Rings', author: 'JRR Tolken', genre: ['fantasy', 'epic'], price: 11.95, description: 'book about wizards n stuff', imageUrl: 'http://cdn.collider.com/wp-content/uploads/2016/07/the-lord-of-the-rings-book-cover.jpg' },
  { title: 'Dune II', author: 'Frank Herbert', genre: ['sci fi', 'futuristic'], price: 10.95, description: 'boring sequel to dune', imageUrl: 'http://payload41.cargocollective.com/1/6/221935/3122457/Dune-2.jpg'},
  { title: 'Dune II', author: 'Frank Herbert', genre: ['sci fi', 'futuristic'], price: 10.95, description: 'not as boring sequel to dune II', imageUrl: 'http://ecx.images-amazon.com/images/I/51s4zOWwoSL._SX310_BO1,204,203,200_.jpg' },
  { title: 'The Bible', author: 'Unknown', genre: ['religious', 'holy texts'], price: 30.05, description: 'its the bible', imageUrl: 'http://biblefalseprophet.com/wp-content/uploads/2016/06/bible1.jpg' },
  { title: 'Cryptonomicon', author: 'Neal Stephenson', genre: ['sci fi', 'cryptography', 'futuristic'], price: 8.95, description: 'book about cryptography and stuff', imageUrl: 'http://vignette1.wikia.nocookie.net/baroquecycle/images/0/0f/Cover_of_Cryptonomicon_Trade_PB_9780380788620.jpg/revision/latest?cb=20080724105005'},
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


const seedSelectedBooks = () => db.Promise.map([
  {'order_id': 1, 'book_id': 1, quantity: 5},
  {'order_id': 2, 'book_id': 1, quantity: 2},
  {'order_id': 3, 'book_id': 4, quantity: 3},
  {'order_id': 4, 'book_id': 5, quantity: 1},
  {'order_id': 4, 'book_id': 6, quantity: 2},
  {'order_id': 4, 'book_id': 7, quantity: 1},
  {'order_id': 1, 'book_id': 4, quantity: 7}], selectedBook => db.model('selectedBooks').create(selectedBook))


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
  .then(seedSelectedBooks)
  .then(selectedBooks => console.log(`Seeded ${selectedBooks.length} selected books OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
