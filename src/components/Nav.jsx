import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

import Logo from "../assets/Logo.svg"; // UniMart logo

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md mb-8">
      <div className="flex items-center justify-between px-4 py-0 md:px-8">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="UniMart Logo"
            className="h-14 w-14 md:h-16 md:w-16 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            About
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Contact
          </a>
          <button className="bg-[#FF9966] text-white px-5 py-1.5 rounded-md hover:bg-orange-500 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <FaTimes
              className="h-6 w-6 text-orange-400 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBarsStaggered
              className="h-6 w-6 text-orange-400 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center space-y-4 py-4">
          <a href="#" className="hover:text-orange-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            About
          </a>
          <a href="#" className="hover:text-orange-400 transition">
            Contact
          </a>
          <button className="bg-orange-400 text-white px-5 py-1.5 rounded-md hover:bg-orange-500 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
