import React, { useEffect, useState } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { post } from "../shared/request";
import milkTea from "../shared/images/milk-tea.svg";
import "./pages.scss";

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
    drinks.map((el, index) => (
      <div styleName="list-item" key={index}>
        <div styleName="item-detail">
          <img src={milkTea} alt="Boba" />
          <p>{el.quantity}</p>
        </div>
        <p>{el.name}</p>

        <p>${el.price.toFixed(2)}</p>
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

            <p style={{ marginBottom: "8px" }}>
              Here are the drinks that you have drink already
            </p>

            <div>{drinks.length > 0 && displayDrinks(drinks)}</div>
          </div>
        );
      }}
    />
  );
};

export default Dashboard;
