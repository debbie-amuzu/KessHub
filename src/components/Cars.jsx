import React from 'react'
import cars from '../page/cars'  // or '../data/cars.js' depending on your structure
import Navbar from './Navbar'

const Cars = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-bold text-5xl font-mono pt-10 pb-5 italic">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full  px-4">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden h-[60vh]">
            <img className="w-full h-[65%] object-cover" src={car.image} alt={car.name} />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
              <p className="text-gray-600 text-lg mt-2">Price: ${car.price}</p>
              <p className="text-gray-600 text-lg mt-2">{car.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cars 