import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTimes,  } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="bg-[rgb(23,79,133)] text-white h-[30%]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kess Automotive Hub</h3>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect vehicle and expect in
                repairing them.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/cars" className="text-gray-400 hover:text-white">
                    Browse Cars
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Ashongman Estates Street</li>
                <li>Accra 12345</li>
                <li>Phone: (030) 5678901</li>
                <li>Email: info@kessshub.com</li>
              </ul>
            </div>
  
            
  
            <div className="flex space-x-4">
              <a
                href="#"
                className= " p-2 rounded-full  hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href="#"
                className=" p-2 rounded-full hover:text-blue-500 transition-colors duration-300"
              >
                <FaTimes size={40} />
              </a>
              <a
                href="#"
                className="p-2 hover:text-blue-500 transition-colors duration-300"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href="#"
                className=" p-2 rounded-full hover:text-blue-500 transition-colors duration-300 "
              >
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 Kess Automotive Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  