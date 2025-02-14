import React from "react";
import Giraffe from "../images/giraffe.gif";
import { useSelector } from "react-redux";
import ColourfulText from "../components/ui/colourful-text";
import { Link } from "react-router";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-700">
      <div className="navbar h-16 flex items-center px-6">
        {/* Left Side - Logo */}
        <div className="flex-1 flex items-center">
          <img className="w-[50px] ml-3" src={Giraffe} alt="giraffe" />
          <Link to="/" className="ml-3 text-2xl font-extrabold text-white">
            DevTinder
          </Link>
        </div>

        {/* Right Side - Profile Dropdown */}
        {user && (
          <div className="flex-none gap-2">
            <p className="font-bold text-xl">
              Welcome <ColourfulText text={user.firstName} />
            </p>
            <div className="dropdown dropdown-end mx-4">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:bg-blue-400 transition-all duration-500"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Profile" src={user.photoUrl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black/80 backdrop-blur-lg rounded-lg z-[1] mt-3 w-52 p-2 shadow border border-gray-700"
              >
                <li>
                  <Link to="/profile" className="flex justify-between ">
                    Profile{" "}
                    <span className="badge bg-blue-500 text-white rounded-lg">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
