import React, { useState } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import NumberFormat from "react-number-format";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import { post } from "../shared/request";
import "./pages.scss";

function NumberFormatCustom({ inputRef, onChange, ...other }) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={val => {
        onChange({
          target: {
            value: val.value
          }
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

const AddDrink = ({ user, history }) => {
  const [drinkInfo, setDrinkInfo] = useState({});
  const [error, setError] = useState({});

  const handlePrice = e => {
    setDrinkInfo({ ...drinkInfo, price: e.target.value });
  };

  const handleSubmit = async () => {
    const { drinkName, price, location } = drinkInfo;
    const errors = {};

    if (!drinkName) {
      errors.drinkName = true;
    }

    if (!price) {
      errors.price = true;
    }

    if (!location) {
      errors.location = true;
    }

    const errorList = Object.keys(errors);

    if (errorList.length) {
      setError(errors);
      return;
    }

    const data = {
      drinkName,
      price: (price * 1).toFixed(2),
      location,
      user: user._id
    };

    try {
      const { data: response } = await post({ url: "/drinks/add-drink", data });

      if (response.status === 200) {
        history.push("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log({ drinkInfo });

  return (
    <AppContainer
      title="Add Drink"
      user={user}
      render={() => {
        return (
          <div styleName="add-drink-container">
            <form onSubmit={handleSubmit} styleName="form-container">
              <TextField
                error={error.drinkName || false}
                value={drinkInfo.drinkName || ""}
                onChange={e =>
                  setDrinkInfo({ ...drinkInfo, drinkName: e.target.value })
                }
                styleName="login-input"
                placeholder="Drink Name"
              />
              <TextField
                error={error.price || false}
                value={drinkInfo.price || ""}
                onChange={handlePrice}
                InputProps={{ inputComponent: NumberFormatCustom }}
                styleName="login-input"
                placeholder="Price"
              />
              <TextField
                error={error.location || false}
                value={drinkInfo.location || ""}
                onChange={e =>
                  setDrinkInfo({ ...drinkInfo, location: e.target.value })
                }
                styleName="login-input"
                placeholder="Location"
              />
              <div styleName="button-container">
                <Button
                  styleName="button"
                  onClick={handleSubmit}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  Add Drink
                </Button>
                <Button
                  onClick={() => history.push("/dashboard")}
                  styleName="button"
                  size="large"
                  variant="contained"
                  color="secondary"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        );
      }}
    />
  );
};

export default AddDrink;
