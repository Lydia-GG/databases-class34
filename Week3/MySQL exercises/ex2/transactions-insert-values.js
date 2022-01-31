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
  `INSERT INTO account VALUES (102, 5000),(101, 3000),(120, 20000),(105, 7000),(150, 150000)`,
  `INSERT INTO account_changes VALUES (105, 150, -2000, '2022-01-01', 'rent' ),(107, 105, 100, '2022-01-22', NULL),(101, 101, -200 ,'2022-01-11', 'Health Insurance'),(113, 150, 500, '2022-01-15', NULL),(117, 102, 150,'2022-01-22', NULL)`,
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
