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
  `INSERT INTO account (balance) VALUES (5000),(3000),(20000),(7000),(150000)`,
  `INSERT INTO account_changes (account_number, amount, changed_date, remark) VALUES (102, -2000, '2022-01-01', 'rent' ),(104, 100, '2022-01-22', NULL),(101, -200 ,'2022-01-11', 'Health Insurance'),(103, 500, '2022-01-15', NULL),(102, 150,'2022-01-22', NULL)`,
];

function insertRows() {
  try {
    queries.forEach(async (query) => await executeQuery(query));
  } catch (err) {
    console.log(err.message);
  }
  connection.end();
}

insertRows();
