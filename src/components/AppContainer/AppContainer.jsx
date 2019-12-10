import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import "./AppContainer.scss";

const AppContainer = ({ render, title, user, ...rest }) => {
  return (
    <div>
      <AppHeader user={user} />
      <div styleName="title">{title}</div>
      <div styleName="content">{render({ ...rest })}</div>
    </div>
  );
};

export default AppContainer;
