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

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/wheretoafrica/" },
  { icon: FaInstagram, url: "#" },
  { icon: FaLinkedinIn, url: "#" },
  { icon: FaTwitter, url: "#" },
  { icon: FaYoutube, url: "#" },
  { icon: FaVimeoV, url: "#" },
];

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
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
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
              <span>Victoria Falls: +263 77 2366698</span>
            </div>
          </div>

          {/* <div className="flex items-center space-x-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube, FaVimeoV].map(
              (Icon, i) => (
                <a key={i} href="#" className="hover:text-gray-900 transition-colors">
                  <Icon />
                </a>
              )
            )}
          </div> */}
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ----------- Transparent Header (above banner) ----------- */}
      <nav
        className={`w-full absolute top-0 md:top-10 left-0 z-[100] transition-all duration-700 ${
          showSticky
            ? "opacity-0 pointer-events-none"
            : "opacity-100 bg-transparent"
        }`}
      >
        <div className="max-w-[1140px] mx-auto py-4 flex items-center justify-between relative text-white  px-4 ">
          {/* Left Menu (Desktop) */}
          <ul className="hd hidden lg:flex gap-8 text-[14px]   uppercase">
            <li>
              <Link to="/" className="hover:text-[#c40]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-[#c40]">
                Find your stay
              </Link>
            </li>
            <li>
              <Link
                to="/luxury-concierge-services"
                className="hover:text-[#c40]"
              >
                Concierge Services
              </Link>
            </li>
            <li>
              <Link to="/restaurant" className="hover:text-[#c40]">
                Restaurant
              </Link>
            </li>
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
            <li>
              <Link
                to="/victoria-falls-experiences"
                className="hover:text-[#c40]"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="/owners-application" className="hover:text-[#c40]">
                Owner Application
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#c40]">
                Contact Us
              </Link>
            </li>
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
            <li>
              <Link to="/" className="hover:text-[#c40]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:text-[#c40]">
                Find your stay
              </Link>
            </li>
            <li>
              <Link
                to="/luxury-concierge-services"
                className="hover:text-[#c40]"
              >
                Concierge Services
              </Link>
            </li>
            <li>
              <Link to="/restaurant" className="hover:text-[#c40]">
                Restaurant
              </Link>
            </li>
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
            <li>
              <Link
                to="/victoria-falls-experiences"
                className="hover:text-[#c40]"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="/owners-application" className="hover:text-[#c40]">
                Owner Application
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-[#c40]">
                Contact Us
              </Link>
            </li>
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
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/properties-landing" onClick={() => setMenuOpen(false)}>
                Find your stay
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/experience-landing" onClick={() => setMenuOpen(false)}>
                Concierge Services
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/restaurant" onClick={() => setMenuOpen(false)}>
                Restaurant
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link
                to="/victoria-falls-experiences"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/owners-application" onClick={() => setMenuOpen(false)}>
                Owner Application
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>
              <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
              <div className=" h-[1px] bg-[#ebebeb]/50 w-3/4"></div>

              <div className="pt-8 flex space-x-4 text-lg">
                {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      <Icon />
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
