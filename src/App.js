import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router basename="/gh-pages">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/about">
            About
          </Route>
          <Route exact path="/users">
            User
          </Route>

          <Route path="*">404</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
