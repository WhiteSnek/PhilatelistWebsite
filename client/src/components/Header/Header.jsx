import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa'; // Importing icons for search and user profile
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">
          Philatelists Hub
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-red-500 transition">
            Home
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-red-500 transition">
            Profile
          </Link>
          <Link to="/collection" className="text-gray-700 hover:text-red-500 transition">
            My Collection
          </Link>
          <Link to="/buy" className="text-gray-700 hover:text-red-500 transition">
            Buy Stamps
          </Link>
        </nav>

        {/* Search Bar & Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border rounded-full py-2 px-4 pr-10 text-sm w-64 focus:outline-none focus:border-red-500 transition"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Profile Icon */}
          <Link to="/profile" className="text-gray-700 hover:text-red-500 transition">
            <FaUserCircle size={32} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
