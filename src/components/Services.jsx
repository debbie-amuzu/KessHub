import React from "react";
import serv1 from "../assets/images/car4.jpeg";
import serv2 from "../assets/images/repair.jpg";
import serv3 from "../assets/images/exhaust.jpg";
import serv4 from "../assets/images/steer.jpg";
import serv5 from "../assets/images/trans.jpg";
import serv6 from "../assets/images/eng.jpg";
import serv7 from "../assets/images/more.jpg";
import Cars from "./Cars";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Services = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="text-center font-bold text-5xl font-mono pt-10 pb-5 italic">
        Our Services
      </h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-8 max-w-auto pl-10">
        <div className="max-w-md  bg-blue-50 shadow-md rounded-lg overflow-hidden border h-full pl-5">
          <div className="relative">
            <img
              src={serv1}
              alt="sales"
              srcSet=""
              className=" w-full object-contain h-[60vh] "
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">Sales of cars</h2>
            <p className="text-gray-600 text-md mt-2">
              Looking for a reliable ride? Explore our top-quality cars at
              unbeatable prices, backed by expert service to keep you on the
              road with confidence
            </p>
            <button className="mt-4 w-[50%] bg-[rgb(23,79,133)] text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-w-md  bg-blue-50 shadow-md rounded-lg overflow-hidden border h-full">
          <div className="relative">
            <img
              src={serv2}
              alt="sales"
              srcSet=""
              className=" w-full object-fit h-[58vh] "
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">
              General Repairs
            </h2>
            <p className="text-gray-600 text-md mt-2">
              From minor fixes to major overhauls, we provide expert repairs for
              all car brands to keep you safely on the road. No matter the make
              or model, our skilled technicians ensure top-quality service you
              can trust
            </p>
            <button className="mt-4 w-[50%] bg-[rgb(23,79,133)] text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-w-md  bg-blue-50 shadow-md rounded-lg overflow-hidden border h-full">
          <div className="relative">
            <img
              src={serv3}
              alt="sales"
              srcSet=""
              className=" w-full object-fit h-[58vh] "
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Exhaust Systems
            </h2>
            <p className="text-gray-600 text-md mt-2">
              Your car's exhaust system plays a vital role in reducing emissions
              and improving engine performance. We provide expert inspection,
              repair, and replacement services to keep your vehicle running
              smoothly and efficiently
            </p>
            <button className="mt-4 w-[50%] bg-[rgb(23,79,133)] text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-w-md  bg-blue-50 shadow-md rounded-lg overflow-hidden border h-full">
          <div className="relative">
            <img
              src={serv4}
              alt="sales"
              srcSet=""
              className=" w-full object-fit h-[58vh] "
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">Power Sterring</h2>
            <p className="text-gray-600 text-md mt-2">
              Power steering ensures smooth and effortless control, making every
              drive safer and more comfortable. We offer expert diagnostics,
              repairs, and fluid replacement to keep your steering responsive
              and hassle-free
            </p>
            <button className="mt-4 w-[50%] bg-[rgb(23,79,133)] text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-w-md  bg-blue-50 shadow-md rounded-lg overflow-hidden border h-full">
          <div className="relative">
            <img
              src={serv5}
              alt="sales"
              srcSet=""
              className=" w-full object-fit h-[58vh] "
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Transmission Repairs
            </h2>
            <p className="text-gray-600 text-md mt-2">
              Your car's transmission is essential for smooth gear shifts and
              optimal performance. We provide expert transmission diagnostics,
              repairs, and maintenance to keep your vehicle running efficiently
              and reliably
            </p>
            <button className="mt-4 w-[50%] bg-[rgb(23,79,133)] text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-w-md bg-blue-50 shadow-md rounded-lg overflow-hidden border h-full">
          <div className="relative">
            <img
              src={serv6}
              alt="sales"
              srcSet=""
              className=" w-full object-fit h-[58vh] "
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Engine Management System
            </h2>
            <p className="text-gray-600 text-md mt-2">
              Your car's Engine Management System monitors and controls key
              performance factors like fuel injection, ignition, and emissions.
              We offer expert diagnostics and repairs to ensure your engine runs
              efficiently, delivering optimal power and fuel economy
            </p>
            <button className="mt-4 w-[50%] bg-[rgb(23,79,133)] text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-w-md  bg-blue-50 shadow-md rounded-lg overflow-hidden border h-full">
          <div className="relative">
            <img
              src={serv7}
              alt="sales"
              srcSet=""
              className=" w-full object-fit h-[58vh] "
            />
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">Other Services</h2>
            <p className="text-gray-600 text-md mt-2">
              Additionally, we provide services like alignment checks, battery
              replacements, and detailing to ensure your vehicle run smoothly
              and maintain its appearance
            </p>
            <button className="mt-4 w-[50%] bg-[rgb(23,79,133)] text-white py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
