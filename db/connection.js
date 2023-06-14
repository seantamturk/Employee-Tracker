const mysql = require("mysql2");
import dotenv from "dotenv";

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "your_mysql_password",
    database: "employee_tracker",
  },
  console.log(`Connected to the employee_tracker database.`)
);

module.exports = db;
