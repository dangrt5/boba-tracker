export let user = {};
export let isAuthenticated = false;
import { post } from "./request";

export const setIsAuthenticated = bool => {
  isAuthenticated = bool;
};

export const setUser = item => {
  user = item;
};

export const loginUser = async (username, password) => {
  const url = "/login";
  try {
    const {
      data: { status, response }
    } = await post({
      url,
      data: {
        username,
        password
      }
    });

    if (status === 200) {
      isAuthenticated = true;
      user = response;
    }

    return { status, response };
  } catch (e) {
    console.log(e);
  }
};
