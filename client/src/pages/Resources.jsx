import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/Resources/SearchBar';
import FeaturedContent from '../components/Resources/FeaturedContent';
import CommunityInsights from '../components/Resources/CommunityInsights';

const Resources = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.section
        className="bg-gray-100 py-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Dak Connect</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Explore a community-driven repository of articles, historical data, and insights on rare stamps.
        </p>
        <SearchBar />
        <FeaturedContent />
        <CommunityInsights />
      </motion.section>
    </motion.div>
  );
};

export default Resources;
