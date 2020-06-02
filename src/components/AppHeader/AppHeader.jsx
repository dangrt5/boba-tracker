import React from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "ramda";
import { user } from "../../shared/auth";
import "./AppHeader.scss";

const AppHeader = () => {
  console.log({ user });
  return (
    <div styleName="header-container">
      <ul styleName="links">
        <li>
          <Link to={isEmpty(user) ? "/" : "/dashboard"}>Home</Link>
        </li>
        {isEmpty(user) && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default AppHeader;
