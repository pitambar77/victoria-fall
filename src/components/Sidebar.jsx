


import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBed, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
  const [openRooms, setOpenRooms] = useState(false);
  const [openRestaurants, setOpenRestaurants] = useState(false);
  const [openActivities, setActivities] = useState(false);

  
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-[#554e3d] text-gray-200 shadow-xl flex flex-col py-6 px-4 fixed top-0 left-0 h-full">
      <div className=" text-center mt-4 mb-10 ">
        <img src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo-wh.png" alt="" className='w-30'/>
       </div>

      <nav className="flex flex-col gap-2">
        <Link
          to="/dashbord"
          className={`flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive("/dashbord")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          <FaHome /> Home
        </Link>

        <button
          onClick={() => setOpenRooms(!openRooms)}
          className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-[#c40]"
        >
          <span className="flex items-center gap-2">
            <FaBed /> Rooms
          </span>
          {openRooms ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {openRooms && (
          <div className="ml-6 flex flex-col gap-1">
            <Link
              to="/dashbord/rooms/all"
              className={`text-sm ${
                isActive("/dashbord/rooms/all")
                  ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              All Rooms
            </Link>
            <Link
              to="/dashbord/rooms/add"
              className={`text-sm ${
                isActive("/dashbord/rooms/add")
                  ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              Add Room
            </Link>
          </div>
        )}

         <button
          onClick={() => setOpenRestaurants(!openRestaurants)}
          className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-[#c40]"
        >
          <span className="flex items-center gap-2">
            <FaBed /> Resturants
          </span>
          {openRestaurants ? <FaChevronUp /> : <FaChevronDown />}
        </button>


        {openRestaurants && (
          <div className="ml-6 flex flex-col gap-1">
            <Link
              to="/dashbord/restaurants/all"
              className={`text-sm ${
                isActive("/dashbord/restaurants/all")
                  ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              All Restaurants
            </Link>
            <Link
              to="/dashbord/restaurants/add"
              className={`text-sm ${
                isActive("/dashbord/restaurants/add")
                 ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              Add Restaurants
            </Link>
          </div>
        )}

         <button
          onClick={() => setActivities(!openActivities)}
          className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-[#c40]"
        >
          <span className="flex items-center gap-2">
            <FaBed /> Activities
          </span>
          {openActivities ? <FaChevronUp /> : <FaChevronDown />}
        </button>


        {openActivities && (
          <div className="ml-6 flex flex-col gap-1 space-y-2">
            <Link
              to="/dashbord/activities/all"
              className={`text-sm ${
                isActive("/dashbord/activities/all")
                  ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              All Activities
            </Link>
            <Link
              to="/dashbord/activities/add"
              className={`text-sm ${
                isActive("/dashbord/activities/add")
                 ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              Add Activities
            </Link>
               <Link
              to="/dashbord/destination/all"
              className={`text-sm ${
                isActive("/dashbord/destination/all")
                  ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              All Destination
            </Link>
            <Link
              to="/dashbord/destination/add"
              className={`text-sm ${
                isActive("/dashbord/destination/add")
                 ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              Add Destination
            </Link>

             <Link
              to="/dashbord/categories/all"
              className={`text-sm ${
                isActive("/dashbord/categories/all")
                  ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
              All Categories
            </Link>
             <Link
              to="/dashbord/categories/add"
              className={`text-sm ${
                isActive("/dashbord/categories/add")
                 ? "text-[#c40]"
                  : "hover:text-[#c40]"
              }`}
            >
             Add Category
            </Link>
         
          </div>
        )}


        <Link
          to="/dashbord/facilities"
          className={`flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive("/dashbord/facilities")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          🏗️ Facilities
        </Link>
        <Link
          to="/dashbord/actbooking"
          className={`flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive("/dashbord/actbooking")
             ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          🏗️ Activity Booking
        </Link>
        <Link
          to="/dashbord/property-booking"
          className={`flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive("/dashbord/property-booking")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          🏗️ Properties Booking
        </Link>
        <Link
          to="/dashbord/restaurant-booking"
          className={`flex items-center gap-2 px-3 py-2 rounded-md ${
            isActive("/dashbord/restaurant-booking")
              ? "bg-[#c40] text-white"
              : "hover:bg-[#c40]"
          }`}
        >
          🏗️ Restaurant Booking
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
