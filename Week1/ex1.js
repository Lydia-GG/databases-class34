const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'meetup',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

connection.query('DROP DATABASE IF EXISTS meetup', (error, results, fields) => {
  if (error) throw error;
  console.log('meetup database has been deleted...');
});

connection.query('CREATE DATABASE meetup', (error, results, fields) => {
  if (error) throw error;
  console.log('meetup database created...');
});

connection.query('USE meetup', (error, results, fields) => {
  if (error) throw error;
  console.log('Use meetup database...');
});

connection.query(
  'CREATE TABLE Invitee (invitee_no INT, invitee_name VARCHAR(100), invited_by VARCHAR(100))',
  (error, results, fields) => {
    if (error) throw error;
    console.log('Invitee table created...');
  }
);

connection.query(
  `INSERT INTO invitee (invitee_no, invitee_name, invited_by) VALUES (1,'Maria','George'), (2,'Lydia','Heba'), (3,'Gloria','Danny'),(4,'John','Micheal'),(5,'Mark','Heidi')`,
  (error, results, fields) => {
    if (error) throw error;
    console.log('Invitee Rows has been added..');
  }
);

connection.query(
  'CREATE TABLE Room (room_no INT, room_name VARCHAR(100),floor_number INT)',
  (error, results, fields) => {
    if (error) throw error;
    console.log('Room table created...');
  }
);

connection.query(
  `INSERT INTO room (room_no, room_name, floor_number) VALUES (1,'Training Room', 1),(2,'Leadership',1),(3,'Conference',1),(4,'Triumph',2),(5,'Inspiration',2)`,
  (error, results, fields) => {
    if (error) throw error;
    console.log('Room Rows has been added..');
  }
);

connection.query(
  'CREATE TABLE Meeting (meeting_no INT, meeting_title VARCHAR(100), starting_time TIME, ending_time TIME,room_no INT)',
  (error, results, fields) => {
    if (error) throw error;
    console.log('Meeting table created...');
  }
);

connection.query(
  `INSERT INTO meeting (meeting_no, meeting_title, starting_time, ending_time,room_no) VALUES (1,'Startup meeting', '09:00:00','09:30:00', 4),(2,'Leadership meeting', '12:00:00','14:00:00', 2),(3,'Developers meeting', '13:00:00','14:00:00', 5),(4,'Trainees meeting', '10:00:00','11:00:00', 1),(5,'Clients meeting', '13:30:00','14:30:00', 3)`,
  (error, results, fields) => {
    if (error) throw error;
    console.log('Meeting Rows has been added...');
  }
);

connection.end();
