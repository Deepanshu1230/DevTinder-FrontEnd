import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Mainpage from "./components/Mainpage";

const App = () => {
  return (
    <div>
      <div>
        <Provider store={appStore}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Body />}>
                <Route index element={<Mainpage />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </div>
  );
};

export default App;
