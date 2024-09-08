const { DataTypes } = require('sequelize');
const sequelize = require('../connection/db');

const Job = sequelize.define('Job', {
  jobId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  openDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Jobs',
  timestamps: false, 
});

module.exports = Job;
