import React from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { TextField, Button, ButtonBase } from "@material-ui/core";
import styles from "./pages.scss";

const Login = () => {
  return (
    <AppContainer
      title="Login to Boba Tracker"
      render={() => {
        return (
          <form styleName="login-container">
            <TextField styleName="login-input" placeholder="Email Address" />
            <TextField styleName="login-input" placeholder="Password" />
            <Button size="large" variant="contained" color="primary">
              Login
            </Button>
          </form>
        );
      }}
    />
  );
};

export default Login;
