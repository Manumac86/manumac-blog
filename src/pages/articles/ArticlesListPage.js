import React, { useState, useEffect }  from 'react';
import { getFirestore } from '../../firebase';
import ArticlesList from '../../components/ArticlesList/ArticlesList';

const ArticlesListPage = () => {
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

  return (
    loading ? 'Loading...' : <ArticlesList articles={articles}/>
  );
}

export default ArticlesListPage;
