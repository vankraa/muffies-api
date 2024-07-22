const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const ShoppingCart = sequelize.define('ShoppingCart', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = ShoppingCart;
