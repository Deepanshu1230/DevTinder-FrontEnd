import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Mainpart from "./Mainpart";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      
      
      <div>
      <Mainpart>
      <Outlet />
      </Mainpart>
      </div>

      <Footer/>
      
    </div>
  );
};

export default Body;
