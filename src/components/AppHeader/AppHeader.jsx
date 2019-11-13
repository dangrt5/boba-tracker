import React from "react";
import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div styleName="header-container">
      <ul styleName="links">
        <li>Home</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
};

export default AppHeader;
