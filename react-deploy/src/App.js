import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// custom components
import Home from "./views/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
