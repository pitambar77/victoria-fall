// src/components/Header.jsx
import React from 'react';
import { FaBell, FaExpand, FaAngleDown, FaStar } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 shadow-md border-b  border-gray-700 fixed top-0 w-[1136px] right-0 z-10 ">
      {/* Welcome Message */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-100">Hi, Welcome back!</h1>
        <p className="text-sm text-gray-400">Property Dashboard,</p>
      </div>

      {/* Right section: Icons and Metrics */}
      <div className="flex items-center space-x-6">
        {/* Icons */}
        <div className="flex items-center space-x-4">
          <FaBell className="text-gray-400 hover:text-gray-100 cursor-pointer text-xl" />
         
          {/* User Profile */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg" // Placeholder image
              alt="Ella Jones"
              className="w-8 h-8 rounded-full border border-gray-600"
            />
            <span className="text-gray-100 text-sm font-medium hidden md:block">Ella Jones</span> {/* Hide on small screens */}
            <FaAngleDown className="text-gray-400 text-xs hidden md:block" />
          </div>
        </div>

        {/* Separator */}
        <div className="h-8 w-px bg-gray-700"></div>

        {/* Customer Ratings */}
        {/* <div className="flex flex-col items-end">
          <p className="text-xs text-gray-400">Customer Ratings</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1 text-sm" />
            <span className="text-gray-100 text-sm font-semibold">(9,876)</span>
          </div>
        </div> */}

        {/* Separator */}
        {/* <div className="h-8 w-px bg-gray-700"></div> */}

        {/* Total Income */}
        {/* <div className="flex flex-col items-end">
          <p className="text-xs text-gray-400">Total Income</p>
          <span className="text-green-400 text-sm font-semibold">$1,23,456</span> 
        </div> */}
      </div>
    </header>
  );
};

export default Header;