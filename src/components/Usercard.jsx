"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const Usercard = ({ user, onSwipe }) => {
  const controls = useAnimation();

  const handleSwipe = async (direction) => {
    if (direction === "left") {
      await controls.start({ x: "-100vw", opacity: 0 });
    } else {
      await controls.start({ x: "100vw", opacity: 0 });
    }
    onSwipe(); // Move to next card
  };

  return (
    <motion.div
      className="w-80 h-96 mt-32 mb-14 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
      animate={controls}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, { offset }) => {
        if (offset.x < -100) handleSwipe("left");
        else if (offset.x > 100) handleSwipe("right");
      }}
    >
      <img
        src={user.photoUrl || "https://via.placeholder.com/150"}
        alt={user.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h3 className="text-lg font-bold mt-2">{user.firstName}</h3>
      <p className="text-sm text-gray-500">{user.about}</p>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => handleSwipe("left")}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Reject
        </button>
        <button
          onClick={() => handleSwipe("right")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Interested
        </button>
      </div>
    </motion.div>
  );
};

export default Usercard;
