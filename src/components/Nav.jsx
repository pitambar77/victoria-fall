// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {  FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV} from 'react-icons/fa';
// import { BsPhone } from "react-icons/bs";
// import Hero from "./Hero";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // useState(() => {
//   //   const handleScroll = () => {
//   //     setIsScrolled(window.scrollY > 50);
//   //   };

//   //   window.addEventListener("scroll", handleScroll);

//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);
//   useEffect(() => {
//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);


//   return (
//     <>
//     <div className="bg-gray-200  text-[#5c5e62] py-2 text-sm hidden lg:block">
//       <div className="max-w-[1140px] mx-auto  flex justify-between items-center">
//         {/* Left Section: Contact Info */}
//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <BsPhone />
//             <span>SOUTH AFRICA: +27 31 535 2811</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaMapMarkerAlt />
//             <span>CAPE TOWN: +27 31 535 2811</span>
//           </div>
//         </div>

//         {/* Right Section: Social Media Icons */}
//         <div className="flex items-center space-x-4">
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaInstagram />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaTwitter />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaYoutube />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaVimeoV />
//           </a>
//         </div>
//       </div>
//     </div>
//       <nav
//         className={` top-9  fixed left-0 w-full z-[999] 
//             transition-all duration-300 ${
//               isScrolled ? "bg-[#fff] shadow-md text-[#5c5e62]" : " bg-white text-[#5c5e62]"
              
//             } `}
//   //       className={`px-[12%] text-white fixed top-0 left-0 w-full z-[999] 
//   //     transition-all duration-500 transform
//   //     ${isScrolled ? "translate-y-0 bg-[#111111] shadow-md" : "-translate-y-full bg-transparent"}
//   // `}
 
//       >
//         <div className=" navnbar max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
         
         
//           <div className=" lg:hidden block">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               <i className={`${isOpen ? "hidden" : "block"}`}>+</i>
//               <i className={`${isOpen ? "block" : "hidden"}`}>-</i>
//             </button>
//           </div>
//           <ul
//             className={` flex-col hd  lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-8 text-[14px] font-avenir transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden 
//               ${isOpen ? "max-h-[300px] opacity-100":"max-h-0 opacity-0"} lg:max-h-none lg:opacity-100`}
//           >
//             <li>
//               <Link to='/' className=" transition uppercase px-4 lg:px-0 lg:py-0 ">Home</Link>
//             </li>
//              <li>
//               <Link to='/properties-landing' className=" transition uppercase px-4 lg:px-0 lg:py-0 ">Find your stay</Link>
//             </li>
//              <li>
//               <Link to='/experience-landing' className=" transition uppercase px-4  lg:px-0 lg:py-0 ">Concierge Services</Link>
//             </li>
            
            

//           </ul>
//            <Link to='/' >
//                 <img src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png" alt="" className=" w-30" />
//             </Link>
//           {/* <div className=" hidden lg:flex items-center gap-4">

//             <i className=" flex items-center justify-center bg-[#e8021f] rounded-full text-2xl w-[45px] h-[45px]">📞</i>
//             <div className={`${isOpen ? 'text-xs text-[#5c5e62] font-normal' :'text-xs text-white font-normal'}`}>
//               <p className=" text-xs ">Need help?</p>
//               <p className=" font-semibold  ">9999999999</p>

//             </div>

//           </div> */}
//            <ul
//             className={`menu hd  flex-col lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto text-[14px] font-avenir  md:pl-5 md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-6  transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden 
//               ${isOpen ? "max-h-[300px] opacity-100":"max-h-0 opacity-0"} lg:max-h-none lg:opacity-100`}
//           >
//             <li>
//               <Link to="/owners-application" className=" transition px-4  uppercase lg:px-0 lg:py-0 font-normal">Owner Application</Link>
//             </li>
//              <li>
//               <Link to="/contact-us" className=" transition px-4 uppercase  lg:px-0 lg:py-0 font-normal">Contact us</Link>
//             </li>
           
            

//           </ul>
//         </div>
//       </nav>
    
//     </>
//   );
// };

// export default Nav;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {  FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV} from 'react-icons/fa';
// import { BsPhone } from "react-icons/bs";
// import Hero from "./Hero";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // useState(() => {
//   //   const handleScroll = () => {
//   //     setIsScrolled(window.scrollY > 50);
//   //   };

//   //   window.addEventListener("scroll", handleScroll);

//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);
//   useEffect(() => {
//   const handleScroll = () => {
//     setIsScrolled(window.scrollY > 50);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);


//   return (
//     <>
//     <div className="bg-gray-200  text-[#5c5e62] py-2 text-sm hidden lg:block">
//       <div className="max-w-[1140px] mx-auto  flex justify-between items-center">
//         {/* Left Section: Contact Info */}
//         <div className="flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <BsPhone />
//             <span>SOUTH AFRICA: +27 31 535 2811</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaMapMarkerAlt />
//             <span>CAPE TOWN: +27 31 535 2811</span>
//           </div>
//         </div>

//         {/* Right Section: Social Media Icons */}
//         <div className="flex items-center space-x-4">
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaInstagram />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaTwitter />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaYoutube />
//           </a>
//           <a href="#" className="hover:text-gray-900 transition-colors">
//             <FaVimeoV />
//           </a>
//         </div>
//       </div>
//     </div>
//       <nav
//         // className={` top-9  fixed left-0 w-full z-[999] 
//         //     transition-all duration-300 ${
//         //       isScrolled ? "bg-[#fff] shadow-md text-[#5c5e62]" : " bg-white text-[#5c5e62]"
              
//         //     } `}
//         className={`px-[12%] text-white fixed top-0 left-0 w-full z-[999] 
//       transition-all duration-500 transform
//       ${isScrolled ? "translate-y-0 bg-[#111111] shadow-md" : "-translate-y-full bg-transparent"}
//   `}
 
//       >
//         <div className=" navnbar max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
         
         
//           <div className=" lg:hidden block">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               <i className={`${isOpen ? "hidden" : "block"}`}>+</i>
//               <i className={`${isOpen ? "block" : "hidden"}`}>-</i>
//             </button>
//           </div>
//           <ul
//             className={` flex-col hd  lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-8 text-[14px] font-avenir transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden 
//               ${isOpen ? "max-h-[300px] opacity-100":"max-h-0 opacity-0"} lg:max-h-none lg:opacity-100`}
//           >
//             <li>
//               <Link to='/' className=" transition uppercase px-4 lg:px-0 lg:py-0 ">Home</Link>
//             </li>
//              <li>
//               <Link to='/properties-landing' className=" transition uppercase px-4 lg:px-0 lg:py-0 ">Find your stay</Link>
//             </li>
//              <li>
//               <Link to='/experience-landing' className=" transition uppercase px-4  lg:px-0 lg:py-0 ">Concierge Services</Link>
//             </li>
            
            

//           </ul>
//            <Link to='/' >
//                 <img src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png" alt="" className=" w-30" />
//             </Link>
//           {/* <div className=" hidden lg:flex items-center gap-4">

//             <i className=" flex items-center justify-center bg-[#e8021f] rounded-full text-2xl w-[45px] h-[45px]">📞</i>
//             <div className={`${isOpen ? 'text-xs text-[#5c5e62] font-normal' :'text-xs text-white font-normal'}`}>
//               <p className=" text-xs ">Need help?</p>
//               <p className=" font-semibold  ">9999999999</p>

//             </div>

//           </div> */}
//            <ul
//             className={`menu hd  flex-col lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto text-[14px] font-avenir  md:pl-5 md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-6  transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden 
//               ${isOpen ? "max-h-[300px] opacity-100":"max-h-0 opacity-0"} lg:max-h-none lg:opacity-100`}
//           >
//             <li>
//               <Link to="/owners-application" className=" transition px-4  uppercase lg:px-0 lg:py-0 font-normal">Owner Application</Link>
//             </li>
//              <li>
//               <Link to="/contact-us" className=" transition px-4 uppercase  lg:px-0 lg:py-0 font-normal">Contact us</Link>
//             </li>
           
            

//           </ul>
//         </div>
        
//       </nav>
    
//     </>
//   );
// };

// export default Nav;


// 2nd header that work

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
//   FaVimeoV,
// } from "react-icons/fa";
// import { BsPhone } from "react-icons/bs";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ============ HEADER AT START (Transparent) ============ */}
//       <header
//         className={`fixed top-0 left-0 w-full z-[998] text-white transition-all duration-700 ease-in-out ${
//           isScrolled
//             ? "opacity-0 -translate-y-10 pointer-events-none"
//             : "opacity-100 translate-y-0"
//         }`}
//       >
//         <div className="bg-transparent px-[12%] py-6 flex justify-between items-center">
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="WhereTo Logo"
//               className="w-36"
//             />
//           </Link>

//           <ul className="hidden lg:flex gap-8 text-sm uppercase tracking-wide">
//             <li>
//               <Link to="/" className="hover:text-gray-300 transition">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/properties-landing"
//                 className="hover:text-gray-300 transition"
//               >
//                 Find your stay
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/experience-landing"
//                 className="hover:text-gray-300 transition"
//               >
//                 Concierge Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/owners-application"
//                 className="hover:text-gray-300 transition"
//               >
//                 Owner Application
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact-us" className="hover:text-gray-300 transition">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </header>

//       {/* ============ NAVBAR AFTER SCROLL (Dark + Sticky) ============ */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-[999] px-[12%] transition-all duration-700 ease-in-out transform ${
//           isScrolled
//             ? "translate-y-0 bg-[#111111]/95 text-white shadow-lg"
//             : "-translate-y-full"
//         }`}
//       >
//         <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="WhereTo Logo"
//               className="w-28"
//             />
//           </Link>

//           {/* Menu Button for Mobile */}
//           <div className="lg:hidden block">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               <i className={`${isOpen ? "hidden" : "block"}`}>+</i>
//               <i className={`${isOpen ? "block" : "hidden"}`}>-</i>
//             </button>
//           </div>

//           {/* Menu Links */}
//           <ul
//             className={`flex-col lg:flex lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto text-[14px] font-avenir md:py-4 lg:bg-transparent z-50 gap-2 lg:gap-8 transition-all duration-500 ease-in-out space-y-5 lg:space-y-0 overflow-hidden ${
//               isOpen
//                 ? "max-h-[300px] opacity-100"
//                 : "max-h-0 opacity-0"
//             } lg:max-h-none lg:opacity-100`}
//           >
//             <li>
//               <Link to="/" className="transition uppercase px-4 lg:px-0">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/properties-landing"
//                 className="transition uppercase px-4 lg:px-0"
//               >
//                 Find your stay
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/experience-landing"
//                 className="transition uppercase px-4 lg:px-0"
//               >
//                 Concierge Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/owners-application"
//                 className="transition uppercase px-4 lg:px-0"
//               >
//                 Owner Application
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact-us"
//                 className="transition uppercase px-4 lg:px-0"
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;

//3rd header

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
//   FaVimeoV,
// } from "react-icons/fa";
// import { BsPhone } from "react-icons/bs";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSticky, setShowSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowSticky(window.scrollY > 100); // adjust threshold
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ----------- Top Contact Bar ----------- */}
//       <div className="bg-gray-200 text-[#5c5e62] py-2 text-sm hidden lg:block">
//         <div className="max-w-[1140px] mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <BsPhone />
//               <span>SOUTH AFRICA: +27 31 535 2811</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaMapMarkerAlt />
//               <span>CAPE TOWN: +27 31 535 2811</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV].map(
//               (Icon, index) => (
//                 <a key={index} href="#" className="hover:text-gray-900 transition-colors">
//                   <Icon />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ----------- Transparent Header (shown at top) ----------- */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-[999] px-[12%] text-white transition-all duration-700 ${
//           showSticky ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100 bg-transparent"
//         }`}
//       >
//         <div className="navnbar max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
//           {/* Left Menu */}
//           <ul className="hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-30"
//             />
//           </Link>

//           {/* Right Menu */}
//           <ul className="hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* ----------- Sticky Header (appears after scroll) ----------- */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-[999] px-[12%] text-white transition-all duration-700 transform ${
//           showSticky
//             ? "translate-y-0 opacity-100 bg-[#111111] shadow-md"
//             : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="navnbar max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
//           {/* Left Menu */}
//           <ul className="hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-30"
//             />
//           </Link>

//           {/* Right Menu */}
//           <ul className="hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
//   FaVimeoV,
// } from "react-icons/fa";
// import { BsPhone } from "react-icons/bs";

// const Nav = () => {
//   const [showSticky, setShowSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowSticky(window.scrollY > 150); // adjust when fixed starts
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ----------- Top Contact Bar ----------- */}
//       <div className="bg-gray-200 text-[#5c5e62] py-2 text-sm hidden lg:block">
//         <div className="max-w-[1140px] mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <BsPhone />
//               <span>SOUTH AFRICA: +27 31 535 2811</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaMapMarkerAlt />
//               <span>CAPE TOWN: +27 31 535 2811</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV].map(
//               (Icon, index) => (
//                 <a key={index} href="#" className="hover:text-gray-900 transition-colors">
//                   <Icon />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ----------- Normal Transparent Header (moves with page) ----------- */}
//       <nav
//         className={`w-full px-[12%] top-0 bg-transparent transition-all duration-700 z-[999] ${
//           showSticky
//             ? "opacity-0 pointer-events-none"
//             : "opacity-100 bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
//           {/* Left Menu */}
//           <ul className="hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-30"
//             />
//           </Link>

//           {/* Right Menu */}
//           <ul className="hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* ----------- Fixed Header (drops down after scroll) ----------- */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-[999] px-[12%] text-white transition-all duration-700 transform ${
//           showSticky
//             ? "translate-y-0 opacity-100 bg-[#fff] shadow-md text-[#5c5e62]""
//             : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
//           {/* Left Menu */}
//           <ul className="hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-30"
//             />
//           </Link>

//           {/* Right Menu */}
//           <ul className="hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;


// finall header

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
//   FaVimeoV,
// } from "react-icons/fa";
// import { BsPhone } from "react-icons/bs";

// const Nav = () => {
//   const [showSticky, setShowSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowSticky(window.scrollY > 50); // adjust when fixed starts
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ----------- Top Contact Bar ----------- */}
//       <div className="hd bg-gray-200 text-[#5c5e62] py-2 text-sm hidden lg:block relative z-[50]">
//         <div className="max-w-[1140px] mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <BsPhone />
//               <span>SOUTH AFRICA: +27 31 535 2811</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaMapMarkerAlt />
//               <span>CAPE TOWN: +27 31 535 2811</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV].map(
//               (Icon, index) => (
//                 <a key={index} href="#" className="hover:text-gray-900 transition-colors">
//                   <Icon />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ----------- Transparent Header (shows above banner, scrolls normally) ----------- */}
//       <nav
//         className={` hd w-full  absolute top-10 left-0 z-[100] transition-all duration-700 ${
//           showSticky
//             ? "opacity-0 pointer-events-none"
//             : "opacity-100 bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative text-white">
//           {/* Left Menu */}
//           <ul className=" hd hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-30"
//             />
//           </Link>

//           {/* Right Menu */}
//           <ul className="hd hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>
//         </div>
//       </nav>

//       {/* ----------- Fixed Header (drops down after scroll) ----------- */}
//       <nav
//         className={`hd fixed top-0 left-0 w-full z-[999]  transition-all duration-700 transform ${
//           showSticky
//             ? "translate-y-0 opacity-100 bg-[#fff] shadow-md text-[#5c5e62]"
//             : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative">
//           {/* Left Menu */}
//           <ul className="hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-30"
//             />
//           </Link>

//           {/* Right Menu */}
//           <ul className="hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;

// header responsive

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaTwitter,
//   FaYoutube,
//   FaVimeoV,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { BsPhone } from "react-icons/bs";

// const Nav = () => {
//   const [showSticky, setShowSticky] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowSticky(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* ----------- Top Contact Bar ----------- */}
//       <div className="bg-gray-200 text-[#5c5e62] py-2 text-sm hidden lg:block relative z-[50]">
//         <div className="max-w-[1140px] mx-auto flex justify-between items-center px-4">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <BsPhone />
//               <span>SOUTH AFRICA: +27 31 535 2811</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FaMapMarkerAlt />
//               <span>CAPE TOWN: +27 31 535 2811</span>
//             </div>
//           </div>

//           <div className="flex items-center space-x-4">
//             {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV].map(
//               (Icon, i) => (
//                 <a key={i} href="#" className="hover:text-gray-900 transition-colors">
//                   <Icon />
//                 </a>
//               )
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ----------- Transparent Header ----------- */}
//       <nav
//         className={`w-full absolute top-10 left-0 z-[100] transition-all duration-700 ${
//           showSticky
//             ? "opacity-0 pointer-events-none"
//             : "opacity-100 bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative text-white px-4">
//           {/* Left Menu (Desktop) */}
//           <ul className="hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-28"
//             />
//           </Link>

//           {/* Right Menu (Desktop) */}
//           <ul className="hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>

//           {/* Mobile Menu Icon */}
//           <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div className="lg:hidden bg-[#fff] text-[#5c5e62] absolute top-full left-0 w-full shadow-lg">
//             <ul className="flex flex-col text-center py-4 space-y-4 font-avenir uppercase text-sm">
//               <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//               <li><Link to="/properties-landing" onClick={() => setMenuOpen(false)}>Find your stay</Link></li>
//               <li><Link to="/experience-landing" onClick={() => setMenuOpen(false)}>Concierge Services</Link></li>
//               <li><Link to="/owners-application" onClick={() => setMenuOpen(false)}>Owner Application</Link></li>
//               <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>

//       {/* ----------- Sticky Header (Appears on Scroll) ----------- */}
//       <nav
//         className={`fixed top-0 left-0 w-full z-[999] transition-all duration-700 transform ${
//           showSticky
//             ? "translate-y-0 opacity-100 bg-[#fff] shadow-md text-[#5c5e62]"
//             : "-translate-y-full opacity-0"
//         }`}
//       >
//         <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative px-4">
//           {/* Left Menu (Desktop) */}
//           <ul className="hidden lg:flex gap-8 text-[14px] font-avenir uppercase">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/properties-landing">Find your stay</Link></li>
//             <li><Link to="/experience-landing">Concierge Services</Link></li>
//           </ul>

//           {/* Logo */}
//           <Link to="/">
//             <img
//               src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
//               alt="logo"
//               className="w-28"
//             />
//           </Link>

//           {/* Right Menu (Desktop) */}
//           <ul className="hidden lg:flex gap-6 text-[14px] font-avenir uppercase">
//             <li><Link to="/owners-application">Owner Application</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//           </ul>

//           {/* Mobile Menu Icon */}
//           <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu (Sticky Mode) */}
//         {menuOpen && showSticky && (
//           <div className="lg:hidden bg-[#fff] text-[#5c5e62] absolute top-full left-0 w-full shadow-lg">
//             <ul className="flex flex-col text-center py-4 space-y-4 font-avenir uppercase text-sm">
//               <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
//               <li><Link to="/properties-landing" onClick={() => setMenuOpen(false)}>Find your stay</Link></li>
//               <li><Link to="/experience-landing" onClick={() => setMenuOpen(false)}>Concierge Services</Link></li>
//               <li><Link to="/owners-application" onClick={() => setMenuOpen(false)}>Owner Application</Link></li>
//               <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Nav;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <>
      {/* ----------- Top Contact Bar ----------- */}
      <div className="hd bg-gray-200 text-[#5c5e62] py-2 text-sm hidden lg:block relative z-[50]">
        <div className="max-w-[1140px] mx-auto px-4 flex justify-between items-center">
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

          <div className="flex items-center space-x-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV].map(
              (Icon, i) => (
                <a key={i} href="#" className="hover:text-gray-900 transition-colors">
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* ----------- Transparent Header (above banner) ----------- */}
      <nav
        className={`w-full absolute top-0 md:top-10 left-0 z-[100] transition-all duration-700 ${
          showSticky ? "opacity-0 pointer-events-none" : "opacity-100 bg-transparent"
        }`}
      >
        <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative text-white  px-4 ">
          {/* Left Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-8 text-[14px]   uppercase">
            <li><Link to="/" className="hover:text-[#c40]">Home</Link></li>
            <li><Link to="/properties-landing" className="hover:text-[#c40]">Find your stay</Link></li>
            <li><Link to="/experience-landing" className="hover:text-[#c40]">Concierge Services</Link></li>
          </ul>

          {/* Logo */}
          <Link to="/">
            <img
              src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
              alt="logo"
              className="w-28"
            />
          </Link>

          {/* Right Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-6 text-[14px]  uppercase">
            <li><Link to="/owners-application" className="hover:text-[#c40]">Owner Application</Link></li>
            <li><Link to="/contact-us" className="hover:text-[#c40]">Contact Us</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* ----------- Sticky Header ----------- */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-700 transform ${
          showSticky
            ? "translate-y-0 opacity-100 bg-[#fff] shadow-md text-[#5c5e62]"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative px-4 ">
          {/* Left Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-8 text-[14px] uppercase">
            <li><Link to="/" className="hover:text-[#c40]">Home</Link></li>
            <li><Link to="/properties-landing" className="hover:text-[#c40]">Find your stay</Link></li>
            <li><Link to="/experience-landing" className="hover:text-[#c40]">Concierge Services</Link></li>
          </ul>

          {/* Logo */}
          <Link to="/">
            <img
              src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png"
              alt="logo"
              className="w-28"
            />
          </Link>

          {/* Right Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-6 text-[14px]  uppercase">
            <li><Link to="/owners-application" className="hover:text-[#c40]">Owner Application</Link></li>
            <li><Link to="/contact-us" className="hover:text-[#c40]">Contact Us</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* ----------- Mobile Drawer Menu (Right Slide) ----------- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[998]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-full h-full  bg-[#aca188]  z-[999] shadow-xl flex flex-col items-center justify-start pt-16 space-y-6 hd uppercase text-sm text-white/80 "
            >
              {/* Close Icon */}
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>

              {/* Menu Links */}
              <Link to="/"  onClick={() => setMenuOpen(false)}  >Home</Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/properties-landing" onClick={() => setMenuOpen(false)}>Find your stay</Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/experience-landing" onClick={() => setMenuOpen(false)}>Concierge Services</Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/owners-application" onClick={() => setMenuOpen(false)}>Owner Application</Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

              <div className="pt-8 flex space-x-4 text-lg">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                  <a key={i} href="#" className="hover:text-gray-900 transition-colors">
                    <Icon />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;

