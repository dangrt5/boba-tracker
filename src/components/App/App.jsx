import React from "react";
import loadable from "@loadable/component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = loadable(() => import("../../pages/Home"));
const Login = loadable(() => import("../../pages/Login"));
const Signup = loadable(() => import("../../pages/Signup"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
