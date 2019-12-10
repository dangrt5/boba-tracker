import React from "react";
import loadable from "@loadable/component";
import AuthorizedRoute from "../AuthorizedRoute/AuthorizedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const HomePage = loadable(() => import("../../pages/Home"));
const Login = loadable(() => import("../../pages/Login"));
const Signup = loadable(() => import("../../pages/Signup"));
const Dashboard = loadable(() => import("../../pages/Dashboard"));
export const devMode = process.env.NODE_ENV === "development";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => <HomePage devMode={devMode} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={props => <Login devMode={devMode} {...props} />}
        />
        <Route
          exact
          path="/sign-up"
          render={props => <Signup devMode={devMode} {...props} />}
        />
        <AuthorizedRoute
          exact
          path="/dashboard"
          render={props => <Dashboard {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
