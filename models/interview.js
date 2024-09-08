const { DataTypes } = require('sequelize');
const sequelize = require('../connection/db');
const Applicant = require('./applicant');

const Interview = sequelize.define('Interview', {
  interviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  applicantId: {
    type: DataTypes.INTEGER,
    references: {
      model: Applicant,
      key: 'applicantId',
    },
    allowNull: false,
    onDelete: 'CASCADE',
  },
  interviewDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  interviewerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Interviews',
  timestamps: false, 
});

Applicant.hasMany(Interview, { foreignKey: 'applicantId', onDelete: 'CASCADE' });
Interview.belongsTo(Applicant, { foreignKey: 'applicantId' });

module.exports = Interview;
