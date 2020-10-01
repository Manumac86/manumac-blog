// Dependencies
import { hot } from 'react-hot-loader/root';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Styles
import './App.scss';

// Pages
import AboutPage from "./pages/about/AboutPage";
import ArticlesListPage from "./pages/articles/ArticlesListPage";
import ArticlePage from "./pages/article/ArticlePage";
import HomePage from "./pages/home/HomePage";

//Components
import NavBar from './components/NavBar/NavBar';

// App
const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App_content">
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/articles-list'>
              <ArticlesListPage />
            </Route>
            <Route path='/article/:name'>
              <ArticlePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default hot(App);