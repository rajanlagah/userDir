import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Container/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
