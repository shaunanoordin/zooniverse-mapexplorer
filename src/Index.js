import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './components/App';
import Map1 from './pages/Map-1/Index';
import Map1A from './pages/Map-1A/Index';
import Map2 from './pages/Map-2/Index';
import Map3 from './pages/Map-3/Index';
import Map4 from './pages/Map-4/Index';
import Map5 from './pages/Map-5/Index';
import Map6 from './pages/Map-6/Index';
import Map7 from './pages/Map-7/Index';
import Map8 from './pages/Map-8/Index';

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
      <Route path="/map-4" component={Map4}/>
      <Route path="/map-5" component={Map5}/>
      <Route path="/map-6" component={Map6}/>
      <Route path="/map-7" component={Map7}/>
      <Route path="/map-8" component={Map8}/>
    </Route>
  </Router>
  , document.getElementById('root')
);
