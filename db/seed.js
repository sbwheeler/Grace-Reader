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
  {firstName: 'admin', lastName: 'admin', email: 'admin@admin.com', password: '1234', adminStatus: true},
], user => db.model('users').create(user))

const seedOrders = () => db.Promise.map([
 {user_id: 1},
 {user_id: 1, isCart: false},
 {user_id: 2},
 {user_id: 2, isCart: false},
 {user_id: 3},
 {user_id: 3, isCart: false},
 {user_id: 4},
 {user_id: 4, isCart: false},
 {user_id: 5},
 {user_id: 5, isCart: false},
 {user_id: 6},
 {user_id: 6, isCart: false},
 {user_id: 7},
 {user_id: 7, isCart: false},
], order => db.model('orders').create(order))

const seedBooks = () => db.Promise.map([
  { title: 'Harry Potter', author: 'JK Rowling', genre: ['Fantasy'], price: 19.95, description: 'a book about wizards', imageUrl: 'http://prodimage.images-bn.com/pimages/9780545139700_p0_v4_s1200x630.jpg' },
  { title: 'AGame of Thrones', author: 'George R.R. Martin', genre: ['Fantasy', 'Epic'], price: 16.95, description: 'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996.', imageUrl: 'https://03fcd67fd51850d3ba6b-6cb392df11a341bce8c76b1898d0c030.ssl.cf3.rackcdn.com/large/9780/0074/9780007448036.jpg' },
  { title: 'A Clash of Kings', author: 'George R.R. Martin', genre: ['Fantasy', 'Epic'], price: 16.95, description: 'A Clash of Kings is the second novel in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin expected to consist of seven volumes. It was first published on 16 November 1998 in the United Kingdom, although the first United States edition did not follow until March 1999.', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81m8bFyfGaL.jpg' },
  { title: 'A Storm of Swords', author: 'George R.R. Martin', genre: ['Fantasy', 'Epic'], price: 16.95, description: 'A Storm of Swords is the third of seven planned novels in A Song of Ice and Fire, a fantasy series by American author George R. R. Martin. It was first published on August 8, 2000, in the United Kingdom.', imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51SR30XqAHL.jpg' },
  { title: 'A Feast for Crows', author: 'George R.R. Martin', genre: ['Fantasy', 'Epic'], price: 16.95, description: 'A Feast for Crows is the fourth of seven planned novels in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. ', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a3/AFeastForCrows.jpg' },
  { title: 'A Dance With Dragons', author: 'George R.R. Martin', genre: ['Fantasy', 'Epic'], price: 16.95, description: 'A Dance with Dragons is the fifth of seven planned novels in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. In some areas the paperback edition was published in two parts titled Dreams and Dust and After the Feast.', imageUrl: 'http://www.fantasybookreview.co.uk/blog/wp-content/uploads/2014/12/a-dance-with-dragons-cover.jpg' },
  { title: 'Dune', author: 'Frank Herbert', genre: ['Science Fiction'], price: 10.95, description: 'Science Fiction book about a desert planet', imageUrl: 'https://writingishardwork.files.wordpress.com/2016/04/dune.jpg' },
  { title: 'The Fellowship of the Ring', author: 'J.R.R. Tolken', genre: ['Fantasy', 'Epic'], price: 11.95, description: 'The Fellowship of the Ring is the first of three volumes of the epic[2] novel The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. It takes place in the fictional universe of Middle-earth. It was originally published on 29 July 1954 in the United Kingdom. The volume consists of a prologue titled "Concerning Hobbits, and other matters" followed by Book I and Book II.', imageUrl: 'https://peterviney.files.wordpress.com/2010/04/viney-audio-books-fellowship.jpg' },
  { title: 'The Two Towers', author: 'J.R.R. Tolken', genre: ['Fantasy', 'Epic'], price: 11.95, description: 'Tolkien wrote, "The Two Towers gets as near as possible to finding a title to cover the widely divergent Books 3 and 4; and can be left ambiguous."[3] At this stage he planned to title the individual books. The proposed title for Book III was The Treason of Isengard. Book IV was titled The Journey of the Ringbearers or The Ring Goes East. The titles The Treason of Isengard and The Ring Goes East were used in the Millennium edition.', imageUrl: 'http://prodimage.images-bn.com/pimages/9780547928203_p0_v2_s192x300.jpg' },
  { title: 'The Return of the King', author: 'J.R.R. Tolken', genre: ['Fantasy', 'Epic'], price: 11.95, description: 'The Return of the King is the third and final volume of J. R. R. Tolkien\'s The Lord of the Rings, following The Fellowship of the Ring and The Two Towers. The story begins in the kingdom of Gondor, which is soon to be attacked by the Dark Lord Sauron.', imageUrl: 'http://www.atfmb.com/wp-content/uploads/2010/04/PB-Return_King_2008_Alan_Lee.jpg' },
  { title: 'Dune Messiah', author: 'Frank Herbert', genre: ['Science Fiction'], price: 10.95, description: 'boring sequel to dune', imageUrl: 'http://payload41.cargocollective.com/1/6/221935/3122457/Dune-2.jpg'},
  { title: 'Children of Dune', author: 'Frank Herbert', genre: ['Science Fiction'], price: 10.95, description: 'not as boring sequel to dune II', imageUrl: 'http://ecx.images-amazon.com/images/I/51s4zOWwoSL._SX310_BO1,204,203,200_.jpg' },
  { title: 'Cryptonomicon', author: 'Neal Stephenson', genre: ['Science Fiction', 'Epic', 'Adventure'], price: 8.95, description: 'Cryptonomicon is a 1999 novel by American author Neal Stephenson, set in two different time periods. One group of characters are World War II-era Allied codebreakers and tactical-deception operatives affiliated with the Government Code and Cypher School at Bletchley Park (U.K.), and disillusioned Axis military and intelligence figures.', imageUrl: 'http://vignette1.wikia.nocookie.net/baroquecycle/images/0/0f/Cover_of_Cryptonomicon_Trade_PB_9780380788620.jpg/revision/latest?cb=20080724105005'},
  { title: 'Moby Dick', author: 'Herman Melville', genre: ['Adventure', 'Epic'], price: 12.95, description: 'Moby-Dick, written in 1851, recounts the adventures of the narrator Ishmael as he sails on the whaling ship Pequod under the command of Captain Ahab.', imageUrl: 'http://www.artistdaily.com/wp-content/uploads/moby1.jpg'},
  { title: 'Blood Meridian', author: 'Cormac McCarthy', genre: ['Western', 'Epic', 'Postmodern'], price: 12.95, description: 'The majority of the narrative follows a teenager referred to only as "the kid," with the bulk of the text devoted to his experiences with the Glanton gang, a historical group of scalp hunters who massacred Native Americans and others in the United States–Mexico borderlands from 1849 to 1850 for bounty, pleasure, and eventually out of sheer compulsion. The role of antagonist is gradually filled by Judge Holden, a physically massive, highly-educated member of the gang depicted as completely bald from head to toe.', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/de/CormacMcCarthy_BloodMeridian.jpg'},
  { title: 'All the Pretty Horses', author: 'Cormac McCarthy', genre: ['Western', 'Epic', 'Postmodern'], price: 14.95, description: 'All the Pretty Horses is a novel by American author Cormac McCarthy published by Alfred A. Knopf in 1992. Its romanticism (in contrast to the bleakness of McCarthy\'s earlier work) brought the writer much public attention. It was a bestseller, and it won the U.S. National Book Award.', imageUrl: 'http://ecx.images-amazon.com/images/I/516Jjc9XDVL.jpg'},
  { title: 'Underworld', author: 'Don DeLillo', genre: ['Epic', 'Postmodern'], price: 18.95, description: 'Underworld is a novel published in 1997 by Don DeLillo. It was nominated for the National Book Award, was a best-seller, and is one of DeLillo\'s better-known novels. Underworld continues to receive general acclaim from literary critics. In 2006, a survey of eminent authors and critics conducted by The New York Times found Underworld the runner-up for the best work of American fiction of the past 25 years; it garnered 11 of 125 votes, finishing behind only Toni Morrison\'s Beloved with 15 votes.', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Underworld.jpeg'},

  ], book => db.model('books').create(book))

const seedReviews = () => db.Promise.map([
  {rating: 3.2, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 1},
  {rating: 5.0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 2},
  {rating: 5.0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 8},
  {rating: 3.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 5},
  {rating: 3.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 2},
  {rating: 3.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 7},
  {rating: 2.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 2},
  {rating: 2.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 2},
  {rating: 2.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 8},
  {rating: 4.1, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 7},
  {rating: 4.1, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 6},
  {rating: 4.1, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 3},
  {rating: 1.0, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 5},
  {rating: 1.8, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 4},
  {rating: 1.9, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 1},
  {rating: 1.7, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 4},
  {rating: 1.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 11},
  {rating: 3.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 11},
  {rating: 3.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 10},
  {rating: 4.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 9},
  {rating: 4.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 9},
  {rating: 4.5, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 12},
  {rating: 2, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 10},
  {rating: 2, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 'book_id': 11}
], review => db.model('reviews').create(review))


const seedSelectedBooks = () => db.Promise.map([
  {'order_id': 1, 'book_id': 1, quantity: 5},
  {'order_id': 2, 'book_id': 1, quantity: 2},
  {'order_id': 3, 'book_id': 4, quantity: 3},
  {'order_id': 4, 'book_id': 5, quantity: 1},
  {'order_id': 5, 'book_id': 6, quantity: 2},
  {'order_id': 6, 'book_id': 7, quantity: 1},
  {'order_id': 7, 'book_id': 4, quantity: 7},
  {'order_id': 8, 'book_id': 10, quantity: 10},
  {'order_id': 9, 'book_id': 11, quantity: 10},
  {'order_id': 10, 'book_id': 12, quantity: 10},
  {'order_id': 11, 'book_id': 2, quantity: 10},
  {'order_id': 12, 'book_id': 9, quantity: 10},
  {'order_id': 13, 'book_id': 8, quantity: 2},
  {'order_id': 14, 'book_id': 5, quantity: 2},
  {'order_id': 12, 'book_id': 4, quantity: 2},
  {'order_id': 10, 'book_id': 7, quantity: 2},
  {'order_id': 11, 'book_id': 6, quantity: 3},
  {'order_id': 4, 'book_id': 6, quantity: 3},
  {'order_id': 8, 'book_id': 11, quantity: 3},
  {'order_id': 9, 'book_id': 7, quantity: 3}
  ], selectedBook => db.model('selectedBooks').create(selectedBook))


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
