import React from "react";
// import router
import { HashRouter as Router, Route } from "react-router-dom";
// import pages
import Home from "./views/index";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;
