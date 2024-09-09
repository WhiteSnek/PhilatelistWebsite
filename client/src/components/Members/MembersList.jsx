import React from 'react';
import { motion } from 'framer-motion';

const MembersList = ({ members }) => {
  return (
    <div className="fixed right-2 top-[5rem] w-80 bg-white border-2 border-black rounded-lg shadow-md p-4 overflow-y-auto" style={{ height: "calc(100vh - 5.5rem)" }}>
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Members</h2>
      <ul>
        {members.map((member) => (
          <motion.li
            key={member.id}
            className="mb-4 p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 rounded-md transition duration-150 ease-in-out"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="font-semibold text-gray-900">{member.name}</div>
            <div className="text-sm text-gray-500">{member.role}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
