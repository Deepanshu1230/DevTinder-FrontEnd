import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, SetEmail] = useState("Nehaal042@gmail.com");
  const [password, SetPassword] = useState("Nehaal@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      {/* Login Card */}
      <div className="bg-black/40 backdrop-blur-lg border border-gray-700 shadow-xl rounded-xl p-8 w-96">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Login
        </h2>

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-gray-300 font-medium mb-2 text-left">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={emailId}
            onChange={(e) => SetEmail(e.target.value)}
            className="w-full p-3 bg-black/40 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-300 font-medium mb-2 text-start">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
            className="w-full p-3 bg-black/40 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-all"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
