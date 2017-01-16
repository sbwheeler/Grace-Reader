const db = require('APP/db');
const Sequelize = require('sequelize');

const Orders = db.define('orders', {
  total: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  isCart: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = Orders;
