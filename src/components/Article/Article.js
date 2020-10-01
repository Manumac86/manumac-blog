import React from 'react';

const Article = ({ article }) => {
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((articleContent, key) => <p key={key}>{articleContent}</p>)}
    </>
  );
}

export default Article;
