import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        // className={`px-[12%] text-white fixed top-0 left-0 w-full z-[999] 
        //     transition-all duration-300 ${
        //       isScrolled ? "bg-[#111111] shadow-md" : "bg-transparent"
        //     } `}
        className={`px-[12%] text-white fixed top-0 left-0 w-full z-[999] 
      transition-all duration-500 transform
      ${isScrolled ? "translate-y-0 bg-[#111111] shadow-md" : "-translate-y-full bg-transparent"}
  `}
      >
        <div className=" navnbar max-w-7xl py-4 flex items-center justify-between relative">
          <Link to='/' className=" text-2xl md:text-4xl font-bold logo ">
                Ride<span>lux</span>
            </Link>
         
          <div className=" lg:hidden block">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`${isOpen ? "hidden" : "block"}`}>+</i>
              <i className={`${isOpen ? "block" : "hidden"}`}>-</i>
            </button>
          </div>
          <ul
            className={`menu flex-col lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto bg-black md:pl-5 md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-10 font-semibold transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden 
              ${isOpen ? "max-h-[500px] opacity-100":"max-h-0 opacity-0"} lg:max-h-none lg:opacity-100`}
          >
            <li>
              <Link to="/" className=" transition px-4 py-3 lg:px-0 lg:py-0 font-normal">Home</Link>
            </li>
             <li>
              <Link to="/about" className=" transition px-4 py-3 lg:px-0 lg:py-0 font-normal">About</Link>
            </li>
             <li>
              <Link to="/" className=" transition px-4 py-3 lg:px-0 lg:py-0 font-normal">Blog</Link>
            </li>
             <li>
              <Link to="/about" className=" transition px-4 py-3 lg:px-0 lg:py-0 font-normal">Contact</Link>
            </li>
            

          </ul>
          <div className=" hidden lg:flex items-center gap-4">

            <i className=" flex items-center justify-center bg-[#e8021f] rounded-full text-2xl w-[45px] h-[45px]">📞</i>
            <div>
              <p className=" text-xs text-white font-normal">Need help?</p>
              <p className=" font-semibold">9999999999</p>

            </div>

          </div>
        </div>
      </nav>
      <Hero/>
    </>
  );
};

export default Nav;
