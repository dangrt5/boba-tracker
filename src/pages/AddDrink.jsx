import React, { useState } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { TextField, Button } from "@material-ui/core";
import "./pages.scss";

const AddDrink = ({ user }) => {
  const [drinkInfo, setDrinkInfo] = useState({});

  const handlePrice = e => {
    const theEvent = e;
    let key;

    // Handle paste
    if (theEvent.type === "paste") {
      key = event.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      let key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  return (
    <AppContainer
      title="Add Drink"
      user={user}
      render={() => {
        return (
          <div styleName="add-drink-container">
            <form styleName="form-container">
              <TextField
                value={drinkInfo.drinkName}
                onChange={e =>
                  setDrinkInfo({ ...drinkInfo, drinkName: e.target.value })
                }
                styleName="login-input"
                placeholder="Drink Name"
              />
              <TextField
                value={drinkInfo.price}
                onChange={handlePrice}
                styleName="login-input"
                placeholder="Price"
              />
              <TextField
                value={drinkInfo.location}
                onChange={e =>
                  setDrinkInfo({ ...drinkInfo, location: e.target.value })
                }
                styleName="login-input"
                placeholder="Location"
              />
              <Button
                // onClick={handleSubmit}
                size="large"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </form>
          </div>
        );
      }}
    />
  );
};

export default AddDrink;
