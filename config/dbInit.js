// checks if database exists and creates it if not
const mysql = require('mysql2/promise');
require('dotenv').config();

async function dbInit() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`
  );
}

module.exports = dbInit;
