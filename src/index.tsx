import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SignIn from './components/sign-in/SignIn';

import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Error404 from './components/error-pages/Error404';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={SignIn}></Route>
      <Route path='/pseudo/:pseudo' component={App}></Route>
      <Route component={Error404}></Route>
    </Switch>
  </HashRouter>
);

ReactDOM.render(<Root/>,
  document.getElementById('root')
);
