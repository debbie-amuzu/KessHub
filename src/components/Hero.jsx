import React from "react";
import video from "../assets/video/abt.mp4";
import { FaWrench } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-90"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-40 h-full flex items-center text-center justify-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            From Sales to Repairs,
            <span className="block pt-4">We Keep You Moving</span>
          </h1>
        </div>
      </div>

      {/* Banner CTA - Added z-index to ensure visibility */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-white rounded-r-lg w-[50%]">
          <div className="max-w-7xl mx-auto px-4 pr-10">
            <div className="flex items-center justify-between text-blue-900 py-4">
              <div className="flex items-center space-x-3">
                <FaWrench className="text-2xl" />
                <div>
                  <span className="font-bold">Are you ready? </span>
                  <span className="text-blue-900 text-2xl">Let's repair it now!</span>
                </div>
              </div>
              <button className="bg-red-600 text-center hover:bg-red-800 px-6 py-3 pl-5 pr-5 rounded-md transition-colors duration-300 text-white">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
