import React, { useState } from "react";
import pic from "../assets/images/image1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes, FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[rgb(23,79,133)] fixed w-full shadow-lg flex justify-between items-center z-10 px-4 md:px-10">
      <div className="flex items-center h-20">
        <img
          src={pic}
          alt="logo"
          className="h-16 w-16 md:h-20 md:w-32 object-contain"
        />
        <div className="ml-3">
          <span className="font-bold font-mono text-red-600 text-4xl md:text-6xl">KESS</span>
          <span className="font-bold font-mono text-2xl md:text-4xl text-[rgb(219,219,228)] pl-2">Automotive</span>
          <span className="font-bold font-mono text-2xl md:text-4xl text-red-600 pl-2">Hub</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 pl-32">
        <ul className="flex space-x-6">
          <NavLink to='/' className="py-4 px-2 text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Home</NavLink>
          <NavLink to="/About" className="py-4 px-2 text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">About Us</NavLink>
          <NavLink to="/Services" className="py-4 px-2 text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Service</NavLink>
          <NavLink to='/Cars' className="py-4 px-2 text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Car Gallery</NavLink>
          <NavLink to='/Contact' className="py-4 px-2 text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Contact</NavLink>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes className="h-8 w-8" /> : <FaBars className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[rgb(23,79,133)] p-4 md:hidden">
          <ul className="flex flex-col space-y-4">
            <NavLink to='/' className="text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Home</NavLink>
            <NavLink to="/About" className="text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">About Us</NavLink>
            <NavLink to="/Services" className="text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Service</NavLink>
            <NavLink to='/Cars' className="text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Car Gallery</NavLink>
            <NavLink to='/Contact' className="text-gray-300 font-medium text-lg hover:text-red-400 transition duration-300">Contact</NavLink>
          </ul>
        </div>
      )}

      {/* Social Media Icons */}
      <div className="hidden md:flex space-x-2 items-center pl-5 pb-2 text-white">
        <span className="flex items-center justify-center h-10 w-10 border border-gray-300 rounded-full hover:bg-red-500 text-blue text-2xl">
          <FaTimes />
        </span>
        <span className="flex items-center justify-center h-10 w-10 border text-white border-gray-400 rounded-full hover:bg-red-500 text-2xl">
          <Link to=''><FaFacebook /></Link>
        </span>
        <span className="flex items-center justify-center h-10 w-10 border text-white border-gray-400 rounded-full hover:bg-red-500 text-2xl">
          <FaInstagram />
        </span>
        <span className="flex items-center justify-center h-10 w-10 border text-white border-gray-400 rounded-full hover:bg-red-500 text-2xl">
          <FaLinkedin />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

