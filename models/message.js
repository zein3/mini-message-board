const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Message = sequelize.define('Message', {
  user: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Message.sync({ alter: true });

module.exports = Message;
