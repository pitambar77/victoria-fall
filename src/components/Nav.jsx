import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV} from 'react-icons/fa';
import { BsPhone } from "react-icons/bs";
import Hero from "./Hero";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // useState(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
    <div className="bg-gray-200  text-[#5c5e62] py-2 text-sm hidden lg:block">
      <div className="max-w-[1140px] mx-auto  flex justify-between items-center">
        {/* Left Section: Contact Info */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <BsPhone />
            <span>SOUTH AFRICA: +27 31 535 2811</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>CAPE TOWN: +27 31 535 2811</span>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-900 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            <FaVimeoV />
          </a>
        </div>
      </div>
    </div>
      <nav
        className={` top-9  fixed left-0 w-full z-[999] 
            transition-all duration-300 ${
              isScrolled ? "bg-[#fff] shadow-md text-[#5c5e62]" : " bg-white text-[#5c5e62]"
              
            } `}
  //       className={`px-[12%] text-white fixed top-0 left-0 w-full z-[999] 
  //     transition-all duration-500 transform
  //     ${isScrolled ? "translate-y-0 bg-[#111111] shadow-md" : "-translate-y-full bg-transparent"}
  // `}
 
      >
        <div className=" navnbar max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
         
         
          <div className=" lg:hidden block">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className={`${isOpen ? "hidden" : "block"}`}>+</i>
              <i className={`${isOpen ? "block" : "hidden"}`}>-</i>
            </button>
          </div>
          <ul
            className={` flex-col hd  lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-8 text-[14px] font-avenir transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden 
              ${isOpen ? "max-h-[300px] opacity-100":"max-h-0 opacity-0"} lg:max-h-none lg:opacity-100`}
          >
            <li>
              <Link to='/' className=" transition uppercase px-4 lg:px-0 lg:py-0 ">Home</Link>
            </li>
             <li>
              <Link to='/properties-landing' className=" transition uppercase px-4 lg:px-0 lg:py-0 ">Find your stay</Link>
            </li>
             <li>
              <Link to='/experience-details' className=" transition uppercase px-4  lg:px-0 lg:py-0 ">Concierge Services</Link>
            </li>
            
            

          </ul>
           <Link to='/' >
                <img src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png" alt="" className=" w-30" />
            </Link>
          {/* <div className=" hidden lg:flex items-center gap-4">

            <i className=" flex items-center justify-center bg-[#e8021f] rounded-full text-2xl w-[45px] h-[45px]">📞</i>
            <div className={`${isOpen ? 'text-xs text-[#5c5e62] font-normal' :'text-xs text-white font-normal'}`}>
              <p className=" text-xs ">Need help?</p>
              <p className=" font-semibold  ">9999999999</p>

            </div>

          </div> */}
           <ul
            className={`menu hd  flex-col lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto text-[14px] font-avenir  md:pl-5 md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-6  transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden 
              ${isOpen ? "max-h-[300px] opacity-100":"max-h-0 opacity-0"} lg:max-h-none lg:opacity-100`}
          >
            <li>
              <Link to="/experience-landing" className=" transition px-4  uppercase lg:px-0 lg:py-0 font-normal">Owner Application</Link>
            </li>
             <li>
              <Link to="#" className=" transition px-4 uppercase  lg:px-0 lg:py-0 font-normal">Contact us</Link>
            </li>
           
            

          </ul>
        </div>
      </nav>
    
    </>
  );
};

export default Nav;
