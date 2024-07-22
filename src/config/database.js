const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, decodeURIComponent(process.env.PGPASSWORD), {
  host: process.env.PGHOST,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    options: `project=${process.env.ENDPOINT_ID}`
  }
});

module.exports = sequelize;
