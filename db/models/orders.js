const db = require('APP/db');
const Sequelize = require('sequelize');

const Orders = db.define('orders', {
  books: {
    type: Sequelize.ARRAY(Sequelize.JSON)
  },
  total: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  }
}, {
  hooks: {

    // set total to order
    beforeCreate: function (orders, options, fn) {
      const total = orders.books.reduce((initial, book) => {
        return initial + book.price * book.quantity
      }, 0)

      // set total;
      orders.total = total;

      // escapes infinite loop
      fn(null, options);
    }
  }
})

module.exports = Orders;
