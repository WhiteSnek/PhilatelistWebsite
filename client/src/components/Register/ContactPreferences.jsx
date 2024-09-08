import React from 'react';

const ContactPreferences = ({ userData, handleChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Receive Newsletters</label>
        <select
          name="newsletter"
          value={userData.newsletter}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Notify About New Stamp Releases</label>
        <select
          name="newReleases"
          value={userData.newReleases}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Interested in Attending Philatelic Events</label>
        <select
          name="events"
          value={userData.events}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
};

export default ContactPreferences;
