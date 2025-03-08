import { createSlice } from "@reduxjs/toolkit";

const UserFeed = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      const userFeed = state.filter((user) => user._id !== action.payload);
      return userFeed;
    },
  },
});

export const { addFeed, removeFeed } = UserFeed.actions;
export default UserFeed.reducer;
