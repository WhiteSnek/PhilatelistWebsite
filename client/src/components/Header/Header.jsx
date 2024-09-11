import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { motion } from 'framer-motion';
import { useUser } from "../../provider/UserProvider";

const Header = () => {
  const { user } = useUser();

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold flex gap-2 items-center text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Logo} alt="logo" className="h-10 object-fill" />
          Dak Connect
        </motion.div>

        {/* Navigation */}
        <ul className="nav-list hidden md:flex space-x-8 relative ">
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <NavLink
              to="/feed"
              exact
              className={({ isActive }) =>
                isActive
                  ? "text-black "
                  : "text-gray-700 transition"
              }
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-gray-700 transition"
              }
            >
              Profile
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-gray-700 transition"
              }
            >
              Events
            </NavLink>
          </motion.li>
          <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <NavLink
              to="/buy"
              className={({ isActive }) =>
                isActive
                  ? "text-black"
                  : "text-gray-700 transition"
              }
            >
              Buy Stamps
            </NavLink>
          </motion.li>
        </ul>

        {/* Search Bar & Profile/Login */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm w-64 focus:outline-none focus:border-gray-500 transition"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </motion.div>

          {/* Conditional Profile Icon or Login Button */}
          {user ? (
            <NavLink to="/profile">
              <motion.img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AJM9wkP__z2M-hovSAWcTb_9XJ6smy3NKw&s' // Assuming user object contains `avatar`
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover"
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </NavLink>
          ) : (
            <NavLink to="/login">
              <motion.button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Login
              </motion.button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
