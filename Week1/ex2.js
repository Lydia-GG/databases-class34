const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

let queries = [
  `SELECT name FROM country WHERE population > 800000`,
  `SELECT name FROM country WHERE name LIKE '%land%'`,
  `SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000`,
  `SELECT name FROM  country WHERE continent='Europe'`,
  `SELECT * FROM country ORDER BY SurfaceArea DESC`,
  `SELECT name FROM city WHERE CountryCode = 'NLD'`,
  `SELECT population FROM city WHERE name = 'Rotterdam'`,
  `SELECT name FROM country ORDER BY SurfaceArea DESC LIMIT 10`,
  `SELECT name FROM city ORDER BY population DESC LIMIT 10`,
  `SELECT SUM(population) FROM country;`,
];

queries.forEach((query) => {
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    results.forEach((result) => console.log(result));
  });
});

connection.end();
