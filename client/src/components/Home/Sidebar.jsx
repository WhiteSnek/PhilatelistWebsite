import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const channels = [
    { id: '1', name: 'General Discussion' },
    { id: '2', name: 'Stamp Collection' },
    { id: '3', name: 'Events and News' },
    { id: '4', name: 'Sell and Trade' },
  ];

  return (
    <div
      className="fixed top-[5rem] left-2 w-80 bg-white shadow-lg rounded-lg p-6 border-2 border-gray-700 z-50 overflow-y-auto"
      style={{ height: 'calc(100vh - 5.5rem)' }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Channels</h2>
      <ul>
        {channels.map((channel) => (
          <motion.li
            key={channel.id}
            className="mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Link
              to={`/channel/${channel.id}`}
              className="block w-full bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition duration-200 ease-in-out shadow-md transform hover:scale-105"
              aria-label={`Go to ${channel.name}`}
            >
              {channel.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
