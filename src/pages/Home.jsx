import React from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import Boba from "../shared/images/boba.svg";
import { Button } from "@material-ui/core";
import "./pages.scss";

const HomePage = ({ history, match, ...rest }) => {
  function signupClick(e) {
    history.push("/sign-up");
  }

  function loginClick(e) {
    history.push("/login");
  }

  return (
    <AppContainer
      title="Boba Tracker"
      render={() => {
        return (
          <div styleName="container">
            <div styleName="img-container">
              <div styleName="img">
                <img src={Boba} alt="Milk Tea" />
              </div>
            </div>
            <p styleName="instructions">
              Use this tool to help keep track how much Boba you intake
            </p>

            <div styleName="button-container">
              <div styleName="button">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={signupClick}
                >
                  Sign Up
                </Button>
              </div>
              <div styleName="button">
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={loginClick}
                >
                  Login
                </Button>
              </div>
            </div>

            <p></p>
          </div>
        );
      }}
    />
  );
};

export default HomePage;
