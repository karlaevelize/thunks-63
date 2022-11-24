import axios from "axios";

import { loginSuccess } from "./slice";

export const login = (email, password) => async (dispatch, getState) => {
  try {
    console.log("data in login thunk", email, password);
    const response = await axios.post(
      "https://codaisseur-coders-temporary.herokuapp.com/auth/login",
      {
        email,
        password,
      }
    );
    console.log("login response thunk", response);
    const token = response.data.token;
    localStorage.setItem("token", token);
    dispatch(
      loginSuccess({ token: response.data.token, profile: response.data.user })
    );
  } catch (e) {
    console.log(e);
  }
};

export const persistLogin = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token");

  if (!token) return;

  const response = await axios.get(
    "https://codaisseur-coders-temporary.herokuapp.com/auth/me",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("persist response", response);
  dispatch(loginSuccess({ token: token, profile: response.data }));
};
