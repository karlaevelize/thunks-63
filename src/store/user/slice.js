import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "Ford Prefect",
  id: 42,
  favorites: [1, 2],
  token: localStorage.getItem("token"),
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // to do
    toggleFavorite: (state, action) => {
      // console.log("action", action)
      // console.log("state", current(state))
      //const id = action.payload.id
      const id = action.payload;

      const newFavoritesArray = state.favorites.includes(id)
        ? state.favorites.filter((favoriteId) => favoriteId !== id)
        : [...state.favorites, id];

      // console.log("new array", newFavoritesArray)
      state.favorites = newFavoritesArray;
    },
    loginSuccess: (state, action) => {
      // console.log("action login", action);
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.profile = null;
      state.token = null;
    },
  },
});

export const { toggleFavorite, loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
