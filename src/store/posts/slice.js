import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  details: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsFetched: (state, action) => {
      // console.log("action slice", action);
      state.posts = action.payload;
    },
    oneCharacterFetched: (state, action) => {
      // console.log("action one char", action);
      state.details = action.payload;
    },
  },
});

export const { postsFetched, oneCharacterFetched } = postsSlice.actions;

export default postsSlice.reducer;
