import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Login Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute right-3 top-12 transform -translate-y-1/2"
            >
              {showPassword ? (
                <Visibility className="text-gray-500" />
              ) : (
                <VisibilityOff className="text-gray-500" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <Link to="/forgot-password" className="text-red-500 hover:underline">Forgot Password?</Link>
          <Link to="/register" className="text-red-500 hover:underline">Create an Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
