import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import Navbar from './Navbar';
import con from '../assets/images/gal2.jpeg'

const Contact = () => {
  return (
    <div>
      <Navbar/>
   
    <div className='bg-blue-100 pt-20 pb-20 '>
      
    <div className="max-w-4xl mx-auto p-6 shadow-lg  rounded-lg mt-10 bg-white">
    <img src={con}alt="" srcset=""  className='w-full h-72 object-fit border rounded-lg shadow-lg'/>
      <h1 className="text-5xl italic font-mono font-bold mb-6  text-center text-gray-800">Contact Us</h1>
      
      <div className="mb-4">
        <p className="text-gray-700">We're open for any suggestion or just to have a chat.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600">Address: Ashongman Estates 21st Street, Accra, Ghana</p>
        <p className="text-gray-600">Email: info@kesshub.com</p>
        <p className="text-gray-600">Phone: +233 578 901 245</p>
      </div>

      <form className="flex flex-col mb-6">
        <label className="mb-2 text-gray-700" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        
        <label className="mb-2 text-gray-700" htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          className="mb-4 p-2 border border-gray-300 rounded"
          required
        />
        
        <label className="mb-2 text-gray-700" htmlFor="message">Create a message here</label>
        <textarea
          id="message"
          placeholder="Your message"
          className="mb-4 p-2 border border-gray-300 rounded"
          rows="4"
          required
        />
        
        <button
          type="submit"
          className="bg-[rgb(23,79,133)] text-white py-2 rounded w-52 hover:bg-blue-500 transition duration-200"
        >
          Send Message
        </button>
      </form>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us Here</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/YourPage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition duration-200"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition duration-200"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.twitter.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition duration-200"
          >
            <FaTimes className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition duration-200"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Contact;