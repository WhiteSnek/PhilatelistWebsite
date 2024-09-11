import React from 'react';
import { motion } from 'framer-motion';

const SearchBar = () => {
  return (
    <motion.div 
      className="my-8 text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Search for articles, historical data, or rare stamp insights..."
        className="p-4 w-3/4 md:w-1/2 border border-gray-300 rounded-full shadow-sm"
      />
    </motion.div>
  );
};

export default SearchBar;
