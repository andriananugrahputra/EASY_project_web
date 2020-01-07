import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ArticleDetail from './pages/ArticleDetail';
import Bookmarks from './pages/Bookmarks';
import Profile from './pages/Profile';
import MenuProfile from './components/MenuProfile';
import Follow from './components/Follow';
import ArticleByPerson from './pages/ArticleByPerson';
import Stats from './pages/Stats';
import Comment from './components/Comment';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AppBarHome from './components/AppbarHome';
import './App.css';
import Test from './Test';
import LogReg from './components/LogReg';
import AppBarOther from './components/AppBarOther';
import RelatedArticle from './components/RelatedArticle';
import ArticleByPersonalBody from './Test';
import AddStoryButton from './components/AddStoryButton'
import NewStory from './pages/NewStory'
import Story from './pages/Story'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/stats">
            <Stats/>
          </Route>
          <Route path="/article_by_personal_body">
            <ArticleByPersonalBody/>
          </Route>
          <Route path="/story">
            <Story/>
          </Route>
          <Route path="/new_story">
            <NewStory/>
          </Route>
          <Route path="/add_story_button">
            <AddStoryButton/>
          </Route>
          <Route path="/related_article">
            <RelatedArticle/>
          </Route>
          <Route path="/appbar_other">
            <AppBarOther/>
          </Route>
          <Route path="/appbar">
            <AppBarHome/>
          </Route>
          <Route path="/test">
            <Test/>
          </Route>
          <Route path="/logreg">
            <LogReg/>
          </Route>
          <Route path="/comment">
            <Comment/>
          </Route>
          <Route path="/article_by_person">
            <ArticleByPerson/>
          </Route>
          <Route path="/follow">
            <Follow/>
          </Route>
          <Route path="/menu_profile">
            <MenuProfile/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/bookmarks">
            <Bookmarks/>
          </Route>
          <Route path="/categories">
            <Categories/>
          </Route>
          <Route path="/article_detail">
            <ArticleDetail/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
