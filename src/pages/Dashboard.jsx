import React, { useEffect, useState } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { post } from "../shared/request";

const Dashboard = ({ user }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await post({
          url: "/drinks/retrieve-drinks",
          data: {
            user: user._id
          }
        });
        setDrinks(data.response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const displayDrinks = drinks =>
    drinks.map(el => (
      <div>
        <p>{el.name}</p>
        <p>{el.quantity}</p>
        <p>${el.price}</p>
      </div>
    ));

  return (
    <AppContainer
      title="Dashboard"
      user={user}
      render={() => {
        return (
          <div>
            <h4>Welcome {user.firstName}</h4>

            <p>Here are the drinks that you have drink already</p>

            {drinks.length > 0 && displayDrinks(drinks)}
          </div>
        );
      }}
    />
  );
};

export default Dashboard;
