

// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
//         <div className="text-2xl font-bold tracking-wide">
//           <a href="/" className="hover:text-yellow-400 transition duration-300">
//             Novus Tour and Travel
//           </a>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-lg">
//           <li>
//             <a
//               href="#home"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#destinations"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Destinations
//             </a>
//           </li>
//           <li>
//             <a
//               href="#packages"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Packages
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="hover:text-yellow-400 transition duration-300"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           className="md:hidden text-2xl focus:outline-none"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } md:hidden bg-blue-700 py-4 px-4`}
//       >
//         <ul className="space-y-4 text-lg">
//           <li>
//             <a
//               href="#home"
//               className="block hover:text-yellow-400 transition duration-300"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#destinations"
//               className="block hover:text-yellow-400 transition duration-300"
//             >
//               Destinations
//             </a>
//           </li>
//           <li>
//             <a
//               href="#packages"
//               className="block hover:text-yellow-400 transition duration-300"
//             >
//               Packages
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className="block hover:text-yellow-400 transition duration-300"
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className="block hover:text-yellow-400 transition duration-300"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// import React, { useState } from 'react';
// import { Search, User, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-2xl font-bold text-blue-600">TravelEase</a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <a href="/" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
//               <a href="/destinations" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Destinations</a>
//               <a href="/tours" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tours</a>
//               <a href="/about" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
//               <a href="/contact" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
//             </div>
//           </div>

//           {/* Search and User Profile */}
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search destinations..."
//                   className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
//                 />
//                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               </div>
//               <button className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                 <User className="h-5 w-5" />
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a href="/" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
//             <a href="/destinations" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Destinations</a>
//             <a href="/tours" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Tours</a>
//             <a href="/about" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
//             <a href="/contact" className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200">
//             <div className="flex items-center px-5">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Search destinations..."
//                   className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-full"
//                 />
//                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               </div>
//             </div>
//             <div className="mt-3 px-2">
//               <button className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                 <User className="h-5 w-5 mr-2" />
//                 <span>Profile</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState } from 'react';
// import { Search, User, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="/" className="text-2xl font-bold text-blue-600">TravelEase</a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <a onClick={() => scrollToSection('home')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
//               <a onClick={() => scrollToSection('destinations')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Destinations</a>
//               <a onClick={() => scrollToSection('tours')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tours</a>
//               <a onClick={() => scrollToSection('about')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
//               <a onClick={() => scrollToSection('contact')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
//             </div>
//           </div>

//           {/* Search and User Profile */}
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search destinations..."
//                   className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
//                 />
//                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               </div>
//               <button className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                 <User className="h-5 w-5" />
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" />
//               ) : (
//                 <Menu className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a onClick={() => scrollToSection('home')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
//             <a onClick={() => scrollToSection('destinations')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Destinations</a>
//             <a onClick={() => scrollToSection('tours')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Tours</a>
//             <a onClick={() => scrollToSection('about')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
//             <a onClick={() => scrollToSection('contact')} className="cursor-pointer text-gray-700 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
//           </div>
//           <div className="pt-4 pb-3 border-t border-gray-200">
//             <div className="flex items-center px-5">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Search destinations..."
//                   className="bg-gray-100 text-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white w-full"
//                 />
//                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               </div>
//             </div>
//             <div className="mt-3 px-2">
//               <button className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                 <User className="h-5 w-5 mr-2" />
//                 <span>Profile</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-700">Novus Travels</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a onClick={() => scrollToSection('home')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a onClick={() => scrollToSection('destinations')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Destinations</a>
              <a onClick={() => scrollToSection('tours')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tours</a>
              <a onClick={() => scrollToSection('about')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a onClick={() => scrollToSection('contact')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

          {/* Search and User Profile */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="bg-white text-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-100"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a onClick={() => scrollToSection('home')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a onClick={() => scrollToSection('destinations')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Destinations</a>
            <a onClick={() => scrollToSection('tours')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Tours</a>
            <a onClick={() => scrollToSection('about')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a onClick={() => scrollToSection('contact')} className="cursor-pointer text-gray-700 hover:bg-blue-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="bg-white text-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-100 w-full"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="mt-3 px-2">
              <button className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <User className="h-5 w-5 mr-2" />
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

