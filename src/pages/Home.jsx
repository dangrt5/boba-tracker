import React from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import Boba from "../shared/images/boba.svg";
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
                <button onClick={signupClick}>Sign Up</button>
              </div>
              <div styleName="button">
                <button onClick={loginClick}>Login</button>
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
