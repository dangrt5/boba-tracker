import React, { useEffect, useState } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import milkTea from "../shared/images/milk-tea.svg";
import { Button } from "@material-ui/core";
import { post } from "../shared/request";
import { Link } from "react-router-dom";
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

  const sentenceCase = str => {
    str = str.split(" ");
    str = str.map(
      word => `${word.substr(0, 1).toUpperCase()}${word.substr(1)}`
    );

    return str.join(" ");
  };

  const displayDrinks = drinks =>
    drinks.map((el, index) => (
      <div styleName="list-item" key={index}>
        <div styleName="item-detail">
          <img src={milkTea} alt="Boba" />
        </div>
        <p>{sentenceCase(el.drinkName)}</p>

        <p>${el.price.toFixed(2)}</p>
      </div>
    ));

  const displayTotalPrice = drinks => {
    const total = drinks.reduce((acc, val) => {
      return (acc = (parseFloat(acc) + parseFloat(val.price)).toFixed(2));
    }, 0);

    return total;
  };

  return (
    <AppContainer
      title="Dashboard"
      user={user}
      render={() => {
        return (
          <div>
            <div styleName="create-button-container">
              <Link to="/add-drink">
                <Button color="primary">Add new drink</Button>
              </Link>
            </div>

            <h4 style={{ textAlign: "center" }}>Welcome {user.firstName}</h4>

            <p style={{ marginBottom: "8px" }}>
              Here are the drinks that you have drank already
            </p>

            {drinks.length > 0 && <div>{displayDrinks(drinks)}</div>}

            {drinks.length > 0 && (
              <div styleName="total-container">
                <span>Total:</span> {` $${displayTotalPrice(drinks)}`}
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

export default Dashboard;
