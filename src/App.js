import React from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './pages/result';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function app() {
  return (

    <Router>
      <div>
        <Switch>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default app;
