// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import pic from '../assets/images/image-20.jpg'
import React from "react";
import pic from "../assets/images/image1.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
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
              <a
                href="#"
                className="py-4 px-2  text-red-500 font-medium text-lg"
              >
                Home
              </a>

              <NavLink
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
                to="/About"
              >
                 About Us
              </NavLink>

              <NavLink
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
                to="/Service"
              >
               Service
              </NavLink>

              <a
                href="#"
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
              >
                Booking
              </a>

              <a
                href="#"
                className="py-4 px-2 text-gray-300  font-medium hover:text-red-400 transition duration-300 text-lg"
              >
                Contact
              </a>
            </ul>
          </div>
          <div className="flex space-x-2 items-center pl-5 pb-2 text-blue-400">
              <span className="flex items-center justify-center h-10 w-10 border border-gray-300 rounded-full hover:bg-red-500  text-blue text-2xl">
                <FaTwitter/> 
              </span>
              <span className="flex items-center justify-center h-10 w-10 border text-blue-700 border-gray-400 rounded-full hover:bg-red-500 text-2xl">
                <FaFacebook />
              </span>
              <span className="flex items-center justify-center h-10 w-10 border text-red-300 border-gray-400 rounded-full hover:bg-red-500 text-2xl">
                <FaInstagram />
              </span>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

