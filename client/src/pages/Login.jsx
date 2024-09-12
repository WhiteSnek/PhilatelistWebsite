import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Logo from '../assets/logo.png'; 
import { motion } from 'framer-motion'; 
import { useUser } from '../provider/UserProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, login } = useUser();
  const navigate = useNavigate();
  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const loginUser = async (email, password) => {
      const details = {email, password}
      const success = await login(details)
      if(success)
        return { id: 1, name: 'John Doe', email };
      else console.log('Error!!!!')
    };

    try {
      const userData = await loginUser(email, password);
      setUser(userData); 
      navigate('/feed');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >

        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <img src={Logo} alt="Logo" className="h-24" />
        </motion.div>

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 bg-gray-100 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute right-3 top-12 transform -translate-y-1/2"
            >
              {showPassword ? (
                <Visibility className="text-black" />
              ) : (
                <VisibilityOff className="text-black" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between items-center mt-4 text-sm">
          <Link to="/forgot-password" className="text-gray-500 hover:text-black transition">Forgot Password?</Link>
          <Link to="/register" className="text-gray-500 hover:text-black transition">Create an Account</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
