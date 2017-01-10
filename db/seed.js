const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {firstName: 'Peter', lastName: 'Carlson', email: 'god@example.com', password: '1234'},
  {firstName: 'Barack', lastName: 'Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedOrders = () => db.Promise.map([
  {books: [{id: 5, price: 5.00, quantity: 1}, {id: 3, price: 5.67, quantity: 100}]},
  {books: [{id: 2, price: 4.00, quantity: 2}]}
], order => db.model('orders').create(order))

const seedReviews = () => db.Promise.map([
  {rating: 3.2, content: "dfkjshdjkahsjkdhasdhakdh"},
  {rating: 5.0, content: "LOLOLOLOLOLOLOLLLLLLLLLLLLLLLL"}
], review => db.model('reviews').create(review))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
