import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import UserFeed from "./Userfeed";
import ConnectionReducer from "./ConnectionSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: UserFeed,
    connection: ConnectionReducer,
  },
});

export default appStore;
