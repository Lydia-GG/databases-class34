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
  `SET autocommit = 0`,
  `START TRANSACTION`,
  `UPDATE account SET balance = balance - 1000 WHERE account_number = 101`,
  `UPDATE account SET balance = balance + 1000 WHERE account_number = 102`,
  `INSERT INTO account_changes VALUES(120, 101, -1000, '2022-01-29', NULL)`,
  `INSERT INTO account_changes VALUES(125, 102, 1000, '2022-01-29',NULL)`,
  `COMMIT`,
];

async function transaction() {
  try {
    queries.forEach(async (query) => await executeQuery(query));
  } catch (err) {
    console.log(err.message);
    await executeQuery(`ROLLBACK`);
  }
  connection.end();
}

transaction();
