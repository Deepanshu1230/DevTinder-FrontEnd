"use client";
import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { removeFeed } from "../utils/Userfeed";

const Usercard = ({ user }) => {
  const { _id, firstName, lastName, about, age, gender, photoUrl } = user;

  const dispatch = useDispatch();

  const HandleFeed = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(removeFeed(userId));
    } catch (err) {
      toast.error("Unable to Find feed");
    }
  };
  

  

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-40 mb-16 p-5 bg-slate-900 border border-white rounded-lg">
      <ToastContainer />
        <img
          src={photoUrl}
          alt="phtot"
          className="w-full h-64 object-none rounded-lg"
        />
        <h3 className="text-lg font-bold mt-2">{firstName}</h3>
        <p className="text-sm text-gray-500">{about}</p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => 
              HandleFeed("ignored", _id)
              
            }
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Reject
          </button>

          <button
            onClick={() => 
              HandleFeed("interested", _id)
              
            }
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Interested
          </button>
        </div>
        </div>
      
    </>
  );
};

export default Usercard;
