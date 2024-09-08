import React from 'react';

const BasicInfo = ({ userData, handleChange }) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Confirm your password"
          required
        />
      </div>
    </div>
  );
};

export default BasicInfo;
