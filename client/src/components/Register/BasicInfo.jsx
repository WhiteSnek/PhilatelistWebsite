import React from 'react';
import { motion } from 'framer-motion';

const BasicInfo = ({ userData, handleChange }) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Confirm your password"
          required
        />
      </div>
    </motion.div>
  );
};

export default BasicInfo;
