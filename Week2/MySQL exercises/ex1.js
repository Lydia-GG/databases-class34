export const CREATE_AUTHORS_TAB = `
  CREATE TABLE IF NOT EXISTS authors (
author_no smallint , author_name varchar(100) , university varchar(100), date_of_birth date, h_index TINYINT, gender enum('m', 'f'), Primary Key(author_no)
  );`;

export const ADD_MENTOR_COL = `ALTER TABLE authors ADD mentor smallint;`;

export const ADD_FOREIGN_KEY = `ALTER TABLE authors ADD FOREIGN KEY (mentor) REFERENCES authors(author_no)`;
