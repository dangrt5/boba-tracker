import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = loadable(() => import("../../pages/Home"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={HomePage} />
        <Route path="/sign-up" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
