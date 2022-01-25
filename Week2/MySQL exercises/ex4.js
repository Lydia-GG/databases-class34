export const RESEARCHES_AUTHORS_NUM = `SELECT authors.author_name,research_Papers.author_no, count(paper_title) AS 'number of researches' FROM research_Papers JOIN authors ON research_Papers.author_no = authors.author_no GROUP BY research_Papers.author_no; `;

export const RESEARCH_FEMALE_AUTH = `SELECT COUNT(*) AS 'researches by females' FROM research_Papers JOIN authors ON research_Papers.author_no = authors.author_no WHERE gender = 'f';`;

export const H_INDEX_AVG = `SELECT AVG(h_index) AS h_index_Average, university from authors GROUP BY university;`;

export const PAPERS_PER_UNIVERSITY = `SELECT university , COUNT(*) AS Researches FROM authors JOIN research_Papers ON authors.author_no = research_Papers.author_no GROUP BY university;`;

export const MIN_MAX_INDEX = `SELECT MIN(h_index), MAX(h_index), university FROM authors GROUP BY university; `;
