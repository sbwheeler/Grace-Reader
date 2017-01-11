const db = require('APP/db');
const Sequelize = require('sequelize');

// EI: current plan for handling shopping cart?

const Orders = db.define('orders', {
  // EI: this works for Postgresql, but in other SQL dialects you would want to associate Orders and Products (or possibly a Line Item model) in some way
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

      // EI: what the heck is this thing?
      // console.log(fn.toString())
      // function (err, value) {
      //     if (promise === null) return;
      //     if (err) {
      //         var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
      //         promise._attachExtraTrace(wrapped);
      //         promise._reject(wrapped);
      //     } else if (!multiArgs) {
      //         promise._fulfill(value);
      //     } else {
      //         var $_len = arguments.length;var args = new Array(Math.max($_len - 1, 0)); for(var $_i = 1; $_i < $_len; ++$_i) {args[$_i - 1] = arguments[$_i];};
      //         promise._fulfill(args);
      //     }
      //     promise = null;
      // }

      // escapes infinite loop
      fn(null, options);
    }
  }
})

module.exports = Orders;
