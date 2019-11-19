import React, { useEffect } from "react";
import AppContainer from "../components/AppContainer/AppContainer";
import { post } from "axios";

const Signup = ({ devMode }) => {
  useEffect(() => {
    const url = `${
      devMode ? "http://localhost:5000/api" : "/api"
    }/signup/add-user`;
    const findUser = async () => {
      try {
        const response = await post(url, {
          data: {
            username: "randy.danfsdafsafdg05@gmail.com",
            password: "fskljasklfdjslakf"
          }
        });

        console.log({ response });
      } catch (e) {
        console.log(e);
      }
    };
    findUser();
  }, []);

  return (
    <AppContainer
      title="Sign Up"
      render={() => {
        return (
          <div>
            <h1>hi</h1>
          </div>
        );
      }}
    />
  );
};

export default Signup;
