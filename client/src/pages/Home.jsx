import React from 'react';
import Feed from '../components/Home/Feed';
import Sidebar from '../components/Home/Sidebar';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex p-4">
      <Sidebar />
      <div className="flex-1 ml-[20rem]">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
