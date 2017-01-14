const db = require('APP/db');
const Sequelize = require('sequelize');

const SelectedBooks = db.define('selectedBooks', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
}, {
  instanceMethods: {
    incrementQuantity: function() {
      return this.quantity + 1;
    }
  }
});

module.exports =  SelectedBooks;
