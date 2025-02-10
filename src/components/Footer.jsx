import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaTimes,  } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="bg-[rgb(23,79,133)] text-white h-[20%]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Kess Automotive Hub</h3>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect vehicle and expect in
                repairing them.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className='pl-56'>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/Cars" className="text-gray-400 hover:text-white">
                    Browse Cars
                  </a>
                </li>
                <li>
                  <a href="/Services" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/About" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/Contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Ashongman Estates Street</li>
                <li>Accra 12345</li>
                <li>Phone: (030) 5678901</li>
                <li>Email: info@kessshub.com</li>
              </ul>
            </div>
   */}
            
  
            <div className="flex space-x-4 pl-32">
            <a
            href="https://www.facebook.com/profile.php?id=100063974685967"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:text-blue-200 transition duration-200"
              >
                <FaFacebook size={30} />
              </a>
              <a
            href="https://www.twitter.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-400 hover:text-blue-200 transition duration-200"
          >
                <FaTimes size={30} />
              </a>
              <a
            href="https://www.threads.net/@kess_hub_service_center?xmt=AQGzr6XHao0OMj1h9Fny4Oo4pFt96B-5dXLF3bAiaG6FZVE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-600 hover:text-blue-200 transition duration-200"
          >
                <FaInstagram size={30} />
              </a>
              <a
            href="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-700 hover:text-blue-200 transition duration-200"
          >
                <FaLinkedin size={30} />
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
  