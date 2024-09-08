import React from 'react';

const AdditionalInfo = ({ userData, handleChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Profile Picture</label>
        <input
          type="file"
          name="profilePicture"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <textarea
          name="address"
          value={userData.address}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter your address"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Social Media Links (Optional)</label>
        <input
          type="text"
          name="socialMedia"
          value={userData.socialMedia}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter social media links"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Wishlist/Interest Tags</label>
        <input
          type="text"
          name="wishlist"
          value={userData.wishlist}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter tags or items in your wishlist"
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
