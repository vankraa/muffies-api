const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer');
const NutritionInfo = require('./nutrition_info');
const Recipe = require('./recipe');
const RecipeIngredient = require('./recipe_ingredient');
const Product = require('./product');
const Order = require('./order');
const OrderItem = require('./order_item');

Customer.hasMany(Order, { foreignKey: 'customer_id' });
Order.belongsTo(Customer, { foreignKey: 'customer_id' });

Recipe.hasMany(RecipeIngredient, { foreignKey: 'recipe_id' });
RecipeIngredient.belongsTo(Recipe, { foreignKey: 'recipe_id' });

NutritionInfo.hasMany(RecipeIngredient, { foreignKey: 'nutrition_info_id' });
RecipeIngredient.belongsTo(NutritionInfo, { foreignKey: 'nutrition_info_id' });

Recipe.hasMany(Product, { foreignKey: 'recipe_id' });
Product.belongsTo(Recipe, { foreignKey: 'recipe_id' });

NutritionInfo.hasMany(Product, { foreignKey: 'nutrition_info_id' });
Product.belongsTo(NutritionInfo, { foreignKey: 'nutrition_info_id' });

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
  sequelize,
  Customer,
  NutritionInfo,
  Recipe,
  RecipeIngredient,
  Product,
  Order,
  OrderItem,
};
