// What is the relationship between Authors and Research papers ? Make necessary changes to authors and research_Papers tables and add more tables if necessary.
export const CREATE_RESEARCH_PAPERS_TAB = `
CREATE TABLE research_Papers (
  paper_id INT, 
  paper_title VARCHAR(200), 
  conference VARCHAR(200), 
  publish_date DATE, 
  PRIMARY KEY(paper_id)
  );`;

export const INSERT_AUTHORS_ROWS = `
INSERT INTO authors VALUES ?`;

export const INSERT_RESEARCH_PAPERS_ROWS = `
INSERT INTO research_Papers VALUES ?`;

export const CREATE_AUTHORS_RESEARCHES_TAB = `
CREATE TABLE authors_researches(
  author_no INT, 
  paper_id INT, 
  PRIMARY KEY(author_no,paper_id)
  )`;

export const INSERT_AUTHORS_RESEARCHES_ROWS = `
INSERT INTO authors_researches VALUES ?`;
