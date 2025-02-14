"use client";
import React, { useEffect } from "react";
import ColourfulText from "../components/ui/colourful-text";
import { motion } from "motion/react";
import { Outlet, useNavigate } from "react-router";

const ColourfulTextDemo = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
          Welcome To <ColourfulText text="DevTinder" /> <br /> you will ever
          find
        </h1>
      </div>

      <div>
        <button
          className="mt-7 rounded-lg bg-blue-500 px-8 py-2 font-bold text-xl text-gray-400 shadow-lg shadow-blue-500/50"
          onClick={()=> navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default ColourfulTextDemo;
