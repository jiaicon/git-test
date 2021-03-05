import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {createBrowserHistory } from "history";
import Login from './pages/Login';
import User from './pages/User';
import './App.less';

const App = () => {
  const isLogin = window.userInfo && !!Object.keys(window.userInfo).length;
  console.log(isLogin);
  return (
    <BrowserRouter history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/admin/user" component={User}/>
        <Route exact path="/" render={() => (isLogin ? <Redirect to="/admin/user" /> : <Redirect to="/login" />)} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
