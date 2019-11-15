import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { TextField, Button, ButtonBase, FormControl } from "@material-ui/core";
import styles from "./pages.scss";

const Login = ({ devMode }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = e => {
    setUserName(e.target.value);
  };

  const handlePassword = e => {
    setPassword(btoa(e.target.value));
  };

  const handleSubmit = e => {
    console.log("submitted");
    e.preventDefault();
  };

  return (
    <AppContainer
      title="Login to Boba Tracker"
      render={() => {
        return (
          <form onSubmit={handleSubmit} styleName="login-container">
            <TextField
              onSubmit={handleSubmit}
              value={username}
              onChange={handleUserName}
              styleName="login-input"
              placeholder="Email Address"
            />
            <TextField
              value={atob(password)}
              onChange={handlePassword}
              styleName="login-input"
              placeholder="Password"
            />
            <Button
              onClick={handleSubmit}
              size="large"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        );
      }}
    />
  );
};

export default Login;
