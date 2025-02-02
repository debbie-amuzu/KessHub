import React from 'react'
import cars from '../page/cars'  // or '../data/cars.js' depending on your structure
import Navbar from './Navbar'

const Cars = () => {
  return (
    <div>
      <Navbar/>
   
    <div className="py-16 bg-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <h2 className="text-4xl font-bold text-center mb-12">Car Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden h-[90vh] w-[]">
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-[65%] object-fit"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">{car.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[rgb(23,79,133)]">${car.price}</span>
                  <button className="bg-[rgb(23,79,133)] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Cars 