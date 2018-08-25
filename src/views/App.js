import '../assets/styles/App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './containers/Home';
import PageNotFound from './containers/PageNotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/not-found" component={PageNotFound} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default App
