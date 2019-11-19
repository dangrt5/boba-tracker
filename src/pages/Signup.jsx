import React, { useState, useEffect } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { post } from "../shared/request";
import { TextField, Button, ButtonBase } from "@material-ui/core";
import "./pages.scss";

const Signup = ({ devMode }) => {
  const [error, setError] = useState(false);
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

  useEffect(() => {
    const findUser = async () => {
      try {
        const response = await post({
          url: "/signup/add-user",
          data: {
            username: "randy.dang@gmail.com",
            password: "fskljasklfdjslakf"
          }
        });

        console.log({ response });
      } catch (e) {
        setError(true);
        console.log(e);
      }
    };
    findUser();
  }, []);

  return (
    <AppContainer
      title="Sign Up"
      render={() => {
        return (
          <div>
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
          </div>
        );
      }}
    />
  );
};

export default Signup;
