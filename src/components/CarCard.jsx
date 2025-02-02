// const CarCard = ({ car }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
//       <img 
//         src={car.image} 
//         alt={car.name} 
//         className="w-full h-[70vh] object-contain "
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
//         <div className="flex justify-between mb-2">
//           <span className="text-gray-600">{car.year}</span>
//           <span className="text-blue-600 font-bold">${car.price}</span>
//         </div>
//         <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
//           <div>
//             <span className="font-semibold">Mileage:</span> {car.mileage}
//           </div>
//           <div>
//             <span className="font-semibold">Transmission:</span> {car.transmission}
//           </div>
//           <div>
//             <span className="font-semibold">Fuel:</span> {car.fuel}
//           </div>
//           <div>
//             <span className="font-semibold">Engine:</span> {car.engine}
//           </div>
//         </div>
//         <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CarCard; 