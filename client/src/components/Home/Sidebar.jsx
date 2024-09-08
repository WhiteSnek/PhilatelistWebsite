import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const channels = [
    { id: '1', name: 'General Discussion' },
    { id: '2', name: 'Stamp Collection' },
    { id: '3', name: 'Events and News' },
    { id: '4', name: 'Sell and Trade' },
  ];

  return (
    <div className="fixed top-[5rem] left-2 w-80 bg-white shadow-lg rounded-r-lg p-6 border border-gray-200 z-50 overflow-scroll" style={{ height: "calc(100vh - 5.5rem)" }} >
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Channels</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id} className="mb-4">
            <Link
              to={`/channel/${channel.id}`}
              className="block w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out shadow-md transform hover:scale-105"
              aria-label={`Go to ${channel.name}`}
            >
              {channel.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
