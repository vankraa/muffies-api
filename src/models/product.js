const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Recipe = require('./recipe');
const NutritionInfo = require('./nutrition_info');

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Recipe,
      key: 'recipe_id',
    },
  },
  nutrition_info_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: NutritionInfo,
      key: 'nutrition_info_id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'products',
  timestamps: false,
});

module.exports = Product;
