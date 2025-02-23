"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaSignInAlt, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white w-full flex items-center justify-between p-4 absolute top-0 left-0 z-50">
      <div className="flex items-center space-x-4">
        <Image src="/assets/logo.png" alt="Icon" width={110} height={0} />
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-1/4 bg-black text-white flex flex-col items-center space-y-4 p-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#signin" className="flex items-center hover:underline">
            Sign in <FaSignInAlt className="ml-1" />
          </a>
          <a href="#mycart" className="flex items-center hover:underline">
            myCart <FaShoppingCart className="ml-1" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
