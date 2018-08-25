import '../assets/styles/App.css';
import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Home from './home/Home';
import PageNotFound from './not-found/PageNotFound';

export default App =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/not-found" component={PageNotFound} />
    <Route component={PageNotFound} />
  </Switch>
