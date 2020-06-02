import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { post } from "../shared/request";
import { TextField, Button, ButtonBase, FormControl } from "@material-ui/core";
import {
  isAuthenticated,
  user,
  loginUser,
  setIsAuthenticated,
  setUser
} from "../shared/auth";
import styles from "./pages.scss";

const Login = ({ devMode, history }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = e => {
    setUserName(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    const { status, response } = await loginUser(username, password);
    if (status === 200) {
      setIsAuthenticated(true);
      setUser(response);
      history.push("/dashboard");
    }
  };

  return (
    <AppContainer
      title="Login to Boba Tracker"
      render={() => {
        return (
          <form onSubmit={handleSubmit} styleName="form-container">
            <TextField
              onSubmit={handleSubmit}
              value={username}
              onChange={handleUserName}
              styleName="login-input"
              placeholder="Email Address"
            />
            <TextField
              value={password}
              onChange={handlePassword}
              styleName="login-input"
              type="password"
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
