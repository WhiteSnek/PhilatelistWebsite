import React from 'react';
import { motion } from 'framer-motion'; 

const PhilatelistInfo = ({ userData, handleChange }) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Interest in Philately</label>
        <input
          type="text"
          name="philatelistInterest"
          value={userData.philatelistInterest}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="E.g., Stamps, Covers, Postcards"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Areas of Specialization</label>
        <input
          type="text"
          name="specialization"
          value={userData.specialization}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="E.g., Countries, Themes, Eras"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Member of Any Philatelist Association</label>
        <select
          name="association"
          value={userData.association}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Years of Experience</label>
        <input
          type="number"
          name="experience"
          value={userData.experience}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter number of years"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Preferred Postal Circle</label>
        <input
          type="text"
          name="postalCircle"
          value={userData.postalCircle}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter your preferred postal circle"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Favorite Stamp Issued</label>
        <input
          type="text"
          name="favoriteStamp"
          value={userData.favoriteStamp}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter your favorite stamp"
          required
        />
      </div>
    </motion.div>
  );
};

export default PhilatelistInfo;
