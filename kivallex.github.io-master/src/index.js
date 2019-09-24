import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import App from './modules/App';
import About from './modules/About';

import './styles.css';

ReactDOM.render((
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
    </Switch>
  </Router>
), document.getElementById('root'));
