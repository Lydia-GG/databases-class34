export const CREATE_AUTHORS_TAB = `
CREATE TABLE authors (
author_no INT ,
author_name VARCHAR(100) ,
university VARCHAR(100), 
date_of_birth DATE, 
h_index SMALLINT, 
gender ENUM('m', 'f'), 
PRIMARY KEY(author_no)
  );`;

export const ADD_MENTOR_COL = `
ALTER TABLE authors ADD mentor INT;`;

export const ADD_FOREIGN_KEY = `
ALTER TABLE authors ADD FOREIGN KEY (mentor) REFERENCES authors(author_no)`;
