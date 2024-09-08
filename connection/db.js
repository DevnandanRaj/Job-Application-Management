const { Sequelize } = require('sequelize');
require('dotenv').config();


//Connection for database.
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
