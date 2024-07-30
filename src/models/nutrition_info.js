const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const NutritionInfo = sequelize.define('NutritionInfo', {
  nutrition_info_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  serving_size: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  total_fat: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  saturated_fat: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  cholesterol: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sodium: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  total_carbohydrates: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  sugars: {
    type: DataTypes.DECIMAL,
    allowNull: true,
  },
  vitamin_c: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  vitamin_d: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  thiamin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  riboflavin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  niacin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  vitamin_b6: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  folate: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  vitamin_b12: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pantothenic_acid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  biotin: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  choline: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  calcium: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  phosphorus: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  magnesium: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  copper: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  manganese: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'nutrition_info',
  timestamps: false,
});

module.exports = NutritionInfo;
