import React from "react";
import AppContainer from "../components/AppContainer/AppContainer";

const Dashboard = ({ user }) => {
  console.log({ user });
  return (
    <AppContainer
      title="Dashboard"
      user={user}
      render={() => {
        return (
          <div>
            <h4>Welcome {user.firstName}</h4>
          </div>
        );
      }}
    />
  );
};

export default Dashboard;
