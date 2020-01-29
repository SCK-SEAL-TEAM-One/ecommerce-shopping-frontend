import React from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './pages/result';
import Filter from './pages/filter/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(props) {
  return (

    <Router>
      <div>
        <Switch>
          
          <Route path="/result/:gender/:age" component={Result}>
          </Route>

          <Route exec path="/" component={Filter}>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;