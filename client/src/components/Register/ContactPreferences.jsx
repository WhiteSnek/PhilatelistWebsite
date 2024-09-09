import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const ContactPreferences = ({ userData, handleChange }) => {
  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Receive Newsletters</label>
        <select
          name="newsletter"
          value={userData.newsletter}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Notify About New Stamp Releases</label>
        <select
          name="newReleases"
          value={userData.newReleases}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">Interested in Attending Philatelic Events</label>
        <select
          name="events"
          value={userData.events}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </motion.div>
  );
};

export default ContactPreferences;
