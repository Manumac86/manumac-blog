import React from 'react';
import { NavLink } from "react-router-dom";
import './ArticlesList.scss';

const ArticlesList = ({ articles }) => {
  return (
    <div className="articlesList">
      <h1 className="articlesList_title">Articles</h1>
      {
        articles.map((article, key) => (
          <NavLink
            className="articlesList_link"
            key={key} 
            to={`/article/${article.name}`}
          >
            <div className="articlesList_link_item">
              <h3 className="articlesList_link_item_subtitle">{article.title}</h3>  
              <p className="articlesList_link_item_excerpt">{article.content[0].substring(0, 150)}...</p>
            </div>
          </NavLink>
        ))
      }
    </div>
  );
}

export default ArticlesList;
