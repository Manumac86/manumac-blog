import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../firebase';
import Article from '../../components/Article/Article';

const ArticlePage = () => {
  // URL Params
  const { name } = useParams();

  // State
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effects
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const articlesCollection = db.collection('articles');
    articlesCollection.get()
    .then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log('No results!');
      }
      setArticles(querySnapshot.docs.map(doc => doc.data()));
    })
    .catch(error => {
      console.log("Error searching articles", error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  const article = articles.find(article => article.name === name);

  return (
    loading ? 'Loading...' : <Article article={article}/>
  );
}

export default ArticlePage;
