import { createSlice } from "@reduxjs/toolkit";

const UserFeed = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      return null;
    },
  },
});

export const { addFeed, removeFeed } = UserFeed.actions;
export default UserFeed.reducer;
