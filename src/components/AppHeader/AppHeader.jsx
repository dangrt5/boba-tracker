import React from "react";
import { Link } from "react-router-dom";
import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div styleName="header-container">
      <ul styleName="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default AppHeader;
