// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import heroImg from '../assets/images/image.png'

// const Hero = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* <div className="fixed top-0 left-0 right-0 z-50">
//         <Navbar />
//       </div> */}
      
//       <main className="pt-20">
//         <div className="relative h-[calc(100vh-80px)]">
//           {/* Background Image */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat "
//             style={{
//               backgroundImage: `url(${heroImg})`,
//               opacity: 0.9
//             }}
//           />
            
//           <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
//             <div className="text-white max-w-2xl">
//               <h1 className="text-5xl font-bold mb-6">
//               From Sales to Repairs, We Keep You Moving!
//               </h1>
//               <p className="text-xl mb-8">
//               we don’t just sell cars—we keep them running at their best. From top-quality vehicle sales to expert repairs, we ensure every ride is smooth, safe, and reliable!"
//               </p>
//               <div className="space-x-4">
//                 <a 
//                   href="/cars" 
//                   className="bg-red-600 hover:bg-red-300 text-white px-8 py-3 rounded-lg inline-block font-semibold"
//                 >
//                   Browse Cars
//                 </a>
//                 <a 
//                   href="/contact" 
//                   className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg inline-block font-semibold hover:bg-white hover:text-gray-900"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
       
//       {/* <Footer /> */}
//     </div>
//   )
// }

// export default Hero


import React from 'react'
import video from '../assets/video/abt.mp4'
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden  ">
      <video
        autoPlay
        loop
        muted
        className=" top-1/2 left-1/2 min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 absolute inset-0  bg-cover bg-center bg-no-repeat opacity-90 "
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
<div className="relative max-w-7xl mx-auto px-4 pt-40 h-full flex items-center text-center justify-center">
             <div className="text-white max-w-2xl ">
               <h1 className="text-5xl font-bold mb-6 ">
               From Sales to Repairs, <br />We Keep You Moving!
               </h1>
              
             
    </div>
    </div>
    </div>

    
   
  )
}

export default Hero