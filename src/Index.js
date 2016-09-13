import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Map1 from './pages/Map-1/Index';
import Map1A from './pages/Map-1A/Index';
import Map2 from './pages/Map-2/Index';
import Map3 from './pages/Map-3/Index';

// Todo: let's find a better way to include Styles,
// currently Styles looks like an unused var to eslint
/* eslint "no-unused-vars": 1 */
import Styles from './styles/main.styl';

window.React = React;

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="/map-1" component={Map1}/>
      <Route path="/map-1a" component={Map1A}/>
      <Route path="/map-2" component={Map2}/>
      <Route path="/map-3" component={Map3}/>
    </Route>
  </Router>
  , document.getElementById('root')
);
