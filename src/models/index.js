const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Customer = require('./customer');
const Product = require('./product');
const ShoppingCart = require('./shoppingCart');
const Order = require('./order');
const OrderItem = require('./orderItem');

Customer.hasMany(Order, { foreignKey: 'customer_id' });
Order.belongsTo(Customer, { foreignKey: 'customer_id' });

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
  sequelize,
  Customer,
  Product,
  ShoppingCart,
  Order,
  OrderItem
};
