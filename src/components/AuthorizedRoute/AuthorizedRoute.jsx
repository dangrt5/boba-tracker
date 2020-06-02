import React from "react";
import { Route, Redirect } from "react-router-dom";
import { user, isAuthenticated } from "../../shared/auth";
import { pathOr } from "ramda";

const AuthorizedRoute = ({ render: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return isAuthenticated ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: pathOr("/", ["location"], props) }
            }}
          />
        );
      }}
    />
  );
};

export default AuthorizedRoute;
