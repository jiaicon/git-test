import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {createBrowserHistory } from "history";
import Login from './pages/Login';
import User from './pages/User';
import CreateArticle from './pages/Article/create';
import ViewArticle from './pages/Article/view';
import UpdateArticle from './pages/Article/update';
import Article from './pages/Article';
import './App.less';

const App = () => {
  const isLogin = window.userInfo && !!Object.keys(window.userInfo).length;
  return (
    <BrowserRouter history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/admin/user" component={User}/>
        <Route exact path="/admin/article" component={Article}/>
        <Route exact path="/admin/article/create" component={CreateArticle}/>
        <Route exact path="/admin/article/:id" component={ViewArticle}/>
        <Route exact path="/admin/article/update/:id" component={UpdateArticle}/>
        <Route exact path="/" render={() => (isLogin ? <Redirect to="/admin/article" /> : <Redirect to="/login" />)} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
