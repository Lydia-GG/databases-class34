// All research papers and the number of authors that wrote that paper.
export const RESEARCHES_AUTHORS_NUM = `
SELECT paper_title AS researches, COUNT(author_name) AS number_of_authors
  FROM authors
  JOIN authors_researches 
  ON authors.author_no= authors_researches.author_no
  JOIN research_papers
  ON research_papers.paper_id=authors_researches.paper_id
  GROUP BY paper_title;`;

// Sum of the research papers published by all female authors.
export const RESEARCH_FEMALE_AUTH = `
SELECT Count(DISTINCT(paper_title)) AS researches_by_females 
FROM authors 
JOIN authors_researches 
ON authors.author_no = authors_researches.author_no 
JOIN research_Papers 
ON authors_researches.paper_id = research_Papers.paper_id 
WHERE gender = 'f';`;

// Average of the h-index of all authors per university.
export const H_INDEX_AVG = `
SELECT AVG(h_index) AS h_index_Average, university 
FROM authors 
GROUP BY university;`;

// Sum of the research papers of the authors per university.
export const PAPERS_PER_UNIVERSITY = `
SELECT university , COUNT(paper_title) AS Researches_per_university
FROM authors 
JOIN authors_researches 
ON authors.author_no = authors_researches.author_no
JOIN research_Papers 
ON authors_researches.paper_id = research_Papers.paper_id
GROUP BY university;`;

// Minimum and maximum of the h-index of all authors per university.
export const MIN_MAX_INDEX = `SELECT MIN(h_index), MAX(h_index), university 
FROM authors 
GROUP BY university; `;
