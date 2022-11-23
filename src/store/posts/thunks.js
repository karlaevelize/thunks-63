import axios from "axios";
import { postsFetched, oneCharacterFetched } from "./slice";

const apiUrl = "https://hp-assessment-api.herokuapp.com/got/characters";

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}`);
  // console.log("chars response thunk", response);
  dispatch(postsFetched(response.data.rows));
};

export const fetchOneCharater = (id) => async (dispatch, getState) => {
  const response = await axios.get(`${apiUrl}/${id}`);
  console.log("response char id thunk", response);
  dispatch(oneCharacterFetched(response.data));
};
