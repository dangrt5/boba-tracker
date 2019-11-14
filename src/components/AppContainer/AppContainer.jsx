import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import "./AppContainer.scss";

const AppContainer = ({ render, title, ...rest }) => {
  return (
    <div>
      <AppHeader />
      <div styleName="title">{title}</div>
      <div styleName="content">{render({ ...rest })}</div>
    </div>
  );
};

export default AppContainer;
