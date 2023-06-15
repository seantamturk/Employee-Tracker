const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "employee_tracker",
  },
  console.log(`Connected to the employee_tracker database.`)
);

module.exports = db;
