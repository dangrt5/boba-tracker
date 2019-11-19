import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { post } from "../shared/request";
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

  const handleSubmit = async e => {
    const url = "/login/login-user";
    try {
      const { data } = await post({
        url,
        data: {
          username,
          password
        }
      });
      console.log({ data });
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await post(url, {
  //         data: {
  //           username: "helo@gmail.com",
  //           password: "wassup@gmail.com"
  //         }
  //       });
  //       console.log({ response });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
