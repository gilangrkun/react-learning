import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import TestCsv from "./TestCsv";
import Home from "./Home";

function Address() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/app" component={App} />
        <Route path="/csv" component={TestCsv} />
      </Switch>
    </Router>
  );
}

export default Address;
