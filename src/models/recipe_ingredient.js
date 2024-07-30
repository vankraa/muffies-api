const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Recipe = require('./recipe');
const NutritionInfo = require('./nutrition_info');

const RecipeIngredient = sequelize.define('RecipeIngredient', {
  recipe_ingredient_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: Recipe,
      key: 'recipe_id',
    },
  },
  ingredient_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  quantity: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  nutrition_info_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: NutritionInfo,
      key: 'nutrition_info_id',
    },
  },
}, {
  tableName: 'recipe_ingredients',
  timestamps: false,
});

module.exports = RecipeIngredient;
