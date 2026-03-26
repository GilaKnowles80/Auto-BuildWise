const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // your DB connection

const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  modelUrl: {
    type: DataTypes.STRING, // e.g., '/models/residential.glb'
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Project;