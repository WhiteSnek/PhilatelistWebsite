import React from 'react';
import Feed from '../components/Home/Feed';
import Sidebar from '../components/Home/Sidebar';
import UpcomingEvents from '../components/Home/UpcomingEvents'; 

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex p-4">
      <Sidebar />
      <div className="flex-1 ml-[20rem] flex flex-col lg:flex-row lg:space-x-6">

        <div className="flex-1 lg:w-2/3">
          <Feed />
        </div>
        <div className="lg:w-96 mt-6 lg:mt-0">
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
};

export default Home;
