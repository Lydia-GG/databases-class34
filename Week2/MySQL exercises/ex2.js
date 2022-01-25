// What is the relationship between Authors and Research papers ? Make necessary changes to authors and research_Papers tables and add more tables if necessary.
export const CREATE_RESEARCH_PAPERS_TAB = `CREATE TABLE IF NOT EXISTS research_Papers (paper_id smallint, paper_title varchar(200), conference varchar(200), publish_date date, author_no smallint ,PRIMARY KEY(paper_id), FOREIGN KEY (author_no) REFERENCES authors(author_no));`;

export const INSERT_AUTHORS_ROWS = `
INSERT INTO authors VALUES ?`;

export const INSERT_RESEARCH_PAPERS_ROWS = `INSERT INTO research_Papers VALUES ?`;
