import React from 'react'
import cars from '../page/cars'  // or '../data/cars.js' depending on your structure
import Navbar from './Navbar'

const Cars = () => {
  return (
    <div >  
      <Navbar />
      <div className="container mx-auto px-4"> 
      <h1 className="text-center font-bold text-5xl font-mono pt-20 pb-5 italic">
        Our Showroom
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full  bg-blue-300 ">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden h-[30vh] w-[20vw]">
            <img className="w-full object-cover h-[60%]" src={car.image} alt={car.name} />
           
              <h2 className="text-md font-bold text-gray-800 pl-4">{car.name}</h2>
              <p className="text-gray-600 text-sm mt-1 pl-4">Price: ${car.price}</p>
              <p className="text-gray-600 text-sm mt-1 pl-4">{car.description}</p>
           
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Cars 