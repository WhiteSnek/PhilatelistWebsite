import React from 'react';

const PhilatelistInfo = ({ userData, handleChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Interest in Philately</label>
        <input
          type="text"
          name="philatelistInterest"
          value={userData.philatelistInterest}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="E.g., Stamps, Covers, Postcards"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Areas of Specialization</label>
        <input
          type="text"
          name="specialization"
          value={userData.specialization}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="E.g., Countries, Themes, Eras"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Member of Any Philatelist Association</label>
        <select
          name="association"
          value={userData.association}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Years of Experience</label>
        <input
          type="number"
          name="experience"
          value={userData.experience}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter number of years"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Preferred Postal Circle</label>
        <input
          type="text"
          name="postalCircle"
          value={userData.postalCircle}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter your preferred postal circle"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Favorite Stamp Issued</label>
        <input
          type="text"
          name="favoriteStamp"
          value={userData.favoriteStamp}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter your favorite stamp"
          required
        />
      </div>
    </div>
  );
};

export default PhilatelistInfo;
