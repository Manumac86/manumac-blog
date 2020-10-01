import React from 'react';
import NotFound from '../NotFound/NotFound';

const Article = ({ article }) => {
  return (
    !article ? <NotFound /> :
    <>
      <h1>{article.title}</h1>
      {article.content.map((articleContent, key) => <p key={key}>{articleContent}</p>)}
    </>
  );
}

export default Article;
