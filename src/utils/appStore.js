import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import UserFeed from "./Userfeed";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: UserFeed,
  },
});

export default appStore;
