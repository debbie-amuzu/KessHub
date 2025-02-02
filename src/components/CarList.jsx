// import { useState } from 'react';
// import { carsData } from '../components/cars';
// import CarCard from './CarCard';

// const CarList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const filteredCars = carsData.filter(car => 
//     car.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       {/* Search Bar */}
//       <div className="mb-8">
//         <input
//           type="text"
//           placeholder="Search cars..."
//           className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Cars Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredCars.map((car) => (
//           <CarCard key={car.id} car={car} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarList; 