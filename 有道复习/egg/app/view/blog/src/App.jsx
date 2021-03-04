import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import {createBrowserHistory} from "history";
import Login from './pages/Login';
import './App.less';


const App = () => (
  <HashRouter history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Login}/>
    </Switch>
  </HashRouter>
);

export default App;
