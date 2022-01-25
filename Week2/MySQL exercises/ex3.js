export const AUTHOR_MENTOR_QUERY = `SELECT A1.author_name AS Author, A2.author_name AS Mentor FROM authors AS A1 INNER JOIN authors AS A2 ON A1.author_no =A2.mentor;`;

export const AUTHOR_PAPER_TITLE_QUERY = `
SELECT authors.*,research_Papers.paper_title FROM authors LEFT JOIN research_Papers ON authors.author_no = research_Papers.author_no; `;
