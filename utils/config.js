require('dotenv').config();

// const db_name = process.env.DB_NAME;
// const db_username = process.env.DB_USERNAME;
// const db_password = process.env.DB_PASSWORD;
// const db_host = process.env.DB_HOST;
// const db_port = process.env.DB_PORT;

module.exports = {
  db_name: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT
}
