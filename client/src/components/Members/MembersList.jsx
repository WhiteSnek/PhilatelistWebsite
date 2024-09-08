import React from 'react';

const MembersList = ({ members }) => {
  return (
    <div className="fixed right-2 top-[5rem] w-80 bg-white border border-gray-300 rounded-lg shadow-md p-4 overflow-y-auto" style={{ height: "calc(100vh - 5.5rem)" }} >
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id} className="mb-6 p-3 border-b border-gray-200 last:border-b-0">
            <div className="font-semibold text-gray-900">{member.name}</div>
            <div className="text-sm text-gray-500">{member.role}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
