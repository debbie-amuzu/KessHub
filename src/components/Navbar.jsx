import React from "react";
import pic from "../assets/images/image1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[rgb(23,79,133)] fixed w-full  shadow-lg flex justify-between z-10 ">
      <div className="">
        <div className=" mx-auto px-10 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center italic h-20 w-14">
              <img
                src={pic}
                alt="logo"
                srcSet=""
                className="h-32 w-32 object-contain"
              />
              <span className="font-bold font-mono text-red-600 ml-3 text-6xl ">
                KESS
              </span>
              <span className="font-bold font-mono  text-4xl text-[rgb(219,219,228)] pl-5">
                {" "}
                Automotive
              </span>

              <span className="font-bold font-mono  text-red-600 text-4xl pl-5 ">
                Hub
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-10 pr-8 ">
        <div className="flex justify-between  ">
          <div className="hidden md:flex items-center space-x-6 pl-52">
            <ul>
              <NavLink
               to='/'
                className="py-4 px-2  text-gray-300 font-medium text-lg"
              >
                Home
              </NavLink>

              <NavLink
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
                to="/About"
              >
                 About Us
              </NavLink>

              <NavLink
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
                to="/Services"
              >
               Service
              </NavLink>

              <NavLink
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
                to='/Cars'
              >
               Car Gallery
              </NavLink>

              <NavLink
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
                to='/Contact'
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="flex space-x-2 items-center pl-5 pb-2 text-white">
              <span className="flex items-center justify-center h-10 w-10 border border-gray-300 rounded-full hover:bg-red-500  text-blue text-2xl">
                <FaTimes/> 
              </span>
              <span className="flex items-center justify-center h-10 w-10 border text-white border-gray-400 rounded-full hover:bg-red-500 text-2xl">
                <Link to=''> <FaFacebook /> </Link>
              </span>
              <span className="flex items-center justify-center h-10 w-10 border text-white border-gray-400 rounded-full hover:bg-red-500 text-2xl">
                <FaInstagram />
              </span>
              <span className="flex items-center justify-center h-10 w-10 border text-white border-gray-400 rounded-full hover:bg-red-500 text-2xl">
                <FaLinkedin />
              </span>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

