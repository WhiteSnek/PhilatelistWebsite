import React from 'react';
import { motion } from 'framer-motion';

const CommunityInsights = () => {
  const insights = [
    { title: "Community Contribution on Rare Finds", user: "Alice Brown", rating: 4.8 },
    { title: "Stamp Grading: A Detailed Guide", user: "Bob Smith", rating: 4.5 },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl font-bold text-center text-gray-900">Top Community Insights</h2>
      <motion.div 
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.3,
              staggerChildren: 0.2
            }
          }
        }}
      >
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{insight.title}</h3>
            <p className="text-gray-500">By {insight.user} • Rating: {insight.rating}/5</p>
            <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <a href="#" className="mt-4 block text-blue-500 hover:underline">Read More</a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CommunityInsights;
