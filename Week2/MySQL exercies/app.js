import mysql from 'mysql';
import { promisify } from 'util';
import { CREATE_AUTHORS_TAB, ADD_MENTOR_COL, ADD_FOREIGN_KEY } from './ex1.js';
import {
  INSERT_AUTHORS_ROWS,
  CREATE_RESEARCH_PAPERS_TAB,
  INSERT_RESEARCH_PAPERS_ROWS,
  CREATE_AUTHORS_RESEARCHES_TAB,
  INSERT_AUTHORS_RESEARCHES_ROWS,
} from './ex2.js';
import { AUTHOR_MENTOR_QUERY, AUTHOR_PAPER_TITLE_QUERY } from './ex3.js';
import { authors, research_Papers, authors_researches } from './data.js';
import {
  RESEARCHES_AUTHORS_NUM,
  RESEARCH_FEMALE_AUTH,
  H_INDEX_AVG,
  PAPERS_PER_UNIVERSITY,
  MIN_MAX_INDEX,
} from './ex4.js';

const databaseConfig = {
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'researches',
};

async function seedDatabase() {
  const connection = mysql.createConnection(databaseConfig);
  const executeQuery = promisify(connection.query.bind(connection));

  try {
    await executeQuery(`DROP DATABASE IF EXISTS researches`);
    await executeQuery(`CREATE DATABASE researches`);
    await executeQuery(`USE researches`);

    await executeQuery(CREATE_AUTHORS_TAB);
    await executeQuery(ADD_MENTOR_COL);
    await executeQuery(INSERT_AUTHORS_ROWS, [authors]);
    await executeQuery(ADD_FOREIGN_KEY);

    await executeQuery(CREATE_RESEARCH_PAPERS_TAB);
    await executeQuery(INSERT_RESEARCH_PAPERS_ROWS, [research_Papers]);
    await executeQuery(CREATE_AUTHORS_RESEARCHES_TAB);
    await executeQuery(INSERT_AUTHORS_RESEARCHES_ROWS, [authors_researches]);

    await executeQuery(AUTHOR_MENTOR_QUERY);
    await executeQuery(AUTHOR_PAPER_TITLE_QUERY);

    await executeQuery(RESEARCHES_AUTHORS_NUM);
    await executeQuery(RESEARCH_FEMALE_AUTH);
    await executeQuery(H_INDEX_AVG);
    await executeQuery(PAPERS_PER_UNIVERSITY);
    await executeQuery(MIN_MAX_INDEX);
  } catch (err) {
    console.log(err.message);
  }
  connection.end();
}

seedDatabase();
