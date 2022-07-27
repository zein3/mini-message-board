const config = require('./config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.db_name, config.db_username, config.db_password, {
  dialect: 'postgres',
  host: config.db_host,
  port: config.db_port,
  logging: false
});

module.exports = sequelize;
