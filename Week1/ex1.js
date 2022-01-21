const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'meetup',
});

const executeQuery = (query, data) => {
  connection.query(query, data, (err, result) => {
    if (err) {
      throw err;
    }
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

const queries = [
  `DROP DATABASE IF EXISTS meetup`,
  `CREATE DATABASE meetup`,
  `USE meetup`,
  `CREATE TABLE Invitee (invitee_no SMALLINT , invitee_name VARCHAR(100), invited_by VARCHAR(100), PRIMARY KEY(invitee_no))`,
  `CREATE TABLE Room (room_no SMALLINT , room_name VARCHAR(100),floor_number SMALLINT, PRIMARY KEY(room_no))`,
  `CREATE TABLE Meeting (meeting_no SMALLINT , meeting_title VARCHAR(100), starting_time DATETIME, ending_time DATETIME,room_no SMALLINT, PRIMARY KEY(meeting_no), FOREIGN KEY (room_no) REFERENCES Room(room_no))`,
  `INSERT INTO invitee VALUES (1,'Maria','George'), (2,'Lydia','Heba'), (3,'Gloria','Danny'),(4,'John','Micheal'),(5,'Mark','Heidi')`,
  `INSERT INTO room VALUES (1,'Training Room', 1),(2,'Leadership',1),(3,'Conference',1),(4,'Triumph',2),(5,'Inspiration',2)`,
  `INSERT INTO meeting VALUES (1,'Startup meeting', '2022-01-20 09:00:00','2022-01-20 09:30:00', 4),(2,'Leadership meeting', '2022-01-20 12:00:00','2022-01-20 14:00:00', 2),(3,'Developers meeting', '2022-01-21 13:00:00','2022-01-21 14:00:00', 5),(4,'Trainees meeting', '2022-01-21 10:00:00','2022-01-21 11:00:00', 1),(5,'Clients meeting', '2022-01-22 13:30:00','2022-01-22 14:30:00', 3)`,
];

queries.forEach((query) => {
  executeQuery(query);
});

connection.end();
