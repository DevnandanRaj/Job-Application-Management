const { DataTypes } = require('sequelize');
const sequelize = require('../connection/db');
const Job = require('./job');

const Applicant = sequelize.define('Applicant', {
  applicantId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  jobId: {
    type: DataTypes.INTEGER,
    references: {
      model: Job,
      key: 'jobId', 
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  resumeLink: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending',
  },
}, {
  tableName: 'Applicants',
  timestamps: false, 
});

Job.hasMany(Applicant, { foreignKey: 'jobId', onDelete: 'CASCADE' });
Applicant.belongsTo(Job, { foreignKey: 'jobId' });

module.exports = Applicant;
