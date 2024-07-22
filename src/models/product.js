const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price_per_item: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  bulk_deal: {
    type: DataTypes.JSONB
  }
}, {
  timestamps: true
});

module.exports = Product;
