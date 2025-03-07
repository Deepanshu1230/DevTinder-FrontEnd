import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/RequestSlice";
import { ToastContainer } from "react-toastify";
import ColourfulText from "./ui/colourful-text";

const Request = () => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.Request);

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/recieved", {
        withCredentials: true,
      });

      dispatch(addRequest(res?.data?.data));
      console.log(res?.data?.data);
    } catch (err) {
      console.log(err);
    }

  };

    useEffect(() => {
      fetchRequest();
    }, []);

    if(!request) return;

    if(request.length === 0) return(
      <div>
        No request Found
      </div>
    )
  
  return (
    <div>
      <div className="mt-32 mb-64 px-4 max-w-4xl mx-auto">
        <ToastContainer />
        <div className="text-5xl px-5 font-extrabold text-center mb-6 text-white drop-shadow-xl">
          <ColourfulText text={"Request"} />
        </div>
        <div className="flex flex-col gap-6">
          {request.map(
            (request) => {
              const {_id,firstName,lastName,photoUrl,age,gender,about}=request.fromUserId;


           return(

              <div
              key={_id}
                
                className="flex justify-evenly items-center bg-black gap-x-4 mt-6 rounded-xl p-3 border border-white"
              >
                <div className="border-2 border-purple-400 rounded-full overflow-hidden w-[80px] h-[80px]">
                  <img
                    src={photoUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start text-center">
                  <p className="font-bold text-lg">
                    {firstName + " " + lastName}
                  </p>
                  <p className="font-semibold text-gray-400">{age}</p>
                  <p className="text-gray-300">{about}</p>
                </div>


                <div className="flex flex-col">
                  <button className="bg-pink-500 px-4 py-2 rounded-xl">Accept</button>
                  <button className="bg-blue-500 px-4 py-2 rounded-xl">Reject</button>
                </div>
              </div>
           )
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Request;
