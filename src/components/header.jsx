import React from "react";
import { FaBars } from "react-icons/fa";
// import logo from "../components/"

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-3 py-1.5 text-xs text-white">
          Hoster is Hiring
        </button>
      </div>
      <div>
        <FaBars className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
