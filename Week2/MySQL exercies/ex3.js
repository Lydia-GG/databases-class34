export const AUTHOR_MENTOR_QUERY = `
SELECT A1.author_name AS Author,
A2.author_name AS Mentor 
FROM authors AS A1 
INNER JOIN authors AS A2
ON A1.mentor =A2.author_no;`;

export const AUTHOR_PAPER_TITLE_QUERY = `
SELECT authors.*, paper_title 
FROM authors 
LEFT JOIN authors_researches 
ON authors.author_no = authors_researches.author_no 
LEFT JOIN research_Papers 
ON authors_researches.paper_id= research_Papers.paper_id;
`;
