const mysql = require('mysql');
const { promisify } = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'accounts',
});

const executeQuery = promisify(connection.query.bind(connection));

const queries = [
  `DROP DATABASE IF EXISTS accounts`,
  `CREATE DATABASE accounts`,
  `USE accounts`,
  `CREATE TABLE account (account_number INT PRIMARY KEY, balance INT NOT NULL DEFAULT 0)`,
  `CREATE TABLE account_changes (change_number INT PRIMARY KEY, account_number INT, amount INT NOT  NULL, changed_date DATE NOT NULL, remark VARCHAR(300), FOREIGN KEY (account_number) REFERENCES account(account_number))`,
];

function createDatabase() {
  try {
    queries.forEach(async (query) => await executeQuery(query));
  } catch (err) {
    console.log(err.message);
  }
  connection.end();
}

createDatabase();
