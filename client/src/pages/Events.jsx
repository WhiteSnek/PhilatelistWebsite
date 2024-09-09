import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from '../components/Events/Filter';

// Sample data for events
const events = [
    {
      id: 1,
      name: "Rare Stamp Auction",
      description: "Bid on rare stamps from around the world, including unique finds from various decades and regions. This is a great opportunity for both novice and seasoned collectors.",
      stampPhoto: "https://5.imimg.com/data5/SELLER/Default/2021/5/KA/YK/XE/128841748/old-postage-stamps.jpg",
      openingCall: "Exciting auction of rare stamps!",
      timings: "Sept 10, 2024 - Sept 15, 2024",
      price: 500
    },
    {
      id: 2,
      name: "Vintage Stamps Sale",
      description: "A limited-time sale offering vintage stamps from various historical periods, perfect for those looking to add valuable items to their collection.",
      stampPhoto: "https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg",
      openingCall: "Find vintage stamps for your collection.",
      timings: "Sept 20, 2024 - Sept 25, 2024",
      price: 300
    },
    {
      id: 3,
      name: "Commemorative Stamp Fair",
      description: "Explore a wide array of commemorative stamps that mark important historical milestones. A must-attend event for collectors interested in history.",
      stampPhoto: "https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0002.jpg",
      openingCall: "Explore commemorative stamps marking historic events.",
      timings: "Oct 1, 2024 - Oct 5, 2024",
      price: 400
    },
    {
      id: 4,
      name: "Rare Misprint Stamp Auction",
      description: "A special auction featuring rare misprinted stamps that are highly sought after by collectors for their unique mistakes.",
      stampPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibtmMYZnqTmhhnhO70qxONtGEryUtqoJ1MA&s",
      openingCall: "Get your hands on rare misprint stamps.",
      timings: "Oct 10, 2024 - Oct 15, 2024",
      price: 700
    },
    {
      id: 5,
      name: "Historical Stamp Exhibition",
      description: "An exhibition of stamps that played a significant role in postal history, showcasing rare and valuable pieces from the 19th and early 20th centuries.",
      stampPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5VlvN_msBC0_LJNGRJF344rQOBhzkvhOxw&s",
      openingCall: "Explore stamps that shaped postal history.",
      timings: "Oct 20, 2024 - Oct 25, 2024",
      price: 600
    },
    {
      id: 6,
      name: "Limited Edition Stamp Sale",
      description: "Exclusive sale of limited edition stamps from the 1800s to the 1900s, with a focus on rare pieces that were released in small quantities.",
      stampPhoto: "https://pic.ebid.net/upload_big/7/9/3/1682558369-12333-0.jpg",
      openingCall: "Secure limited edition stamps for your collection.",
      timings: "Nov 1, 2024 - Nov 5, 2024",
      price: 350
    },
    {
      id: 7,
      name: "International Stamp Exchange",
      description: "A global event where collectors can exchange stamps from different countries and time periods. Perfect for expanding your international collection.",
      stampPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJNkluLwLr58g2-5Zvvxbk37MBcqQfXlEeg&s",
      openingCall: "Expand your international stamp collection.",
      timings: "Nov 10, 2024 - Nov 15, 2024",
      price: 450
    },
    {
      id: 8,
      name: "Postage Stamp Showcase",
      description: "A showcase of the finest stamps from private collections around the world, offering a rare chance to view and purchase exceptional pieces.",
      stampPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumnJtByR9x33UZfLKTnH_okbT5s1gVuzQqQ&s",
      openingCall: "View and purchase exclusive stamps from private collections.",
      timings: "Nov 20, 2024 - Nov 25, 2024",
      price: 550
    }
  ];
  

const Events = () => {
  const [filters, setFilters] = useState({
    categories: [],
    types: [],
    priceRange: [0, 1000]
  });

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredEvents = events.filter((event) => {
    return (
      (filters.categories.length === 0 || filters.categories.includes(event.category)) &&
      (filters.types.length === 0 || filters.types.includes(event.stampType)) &&
      event.price >= filters.priceRange[0] &&
      event.price <= filters.priceRange[1]
    );
  });

  return (
    <div className="flex">
      {/* Sidebar filter */}
      <Filter onFilterChange={applyFilters} />
      <div className="p-4 flex-1 ml-[21rem]">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Events</h2>
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white border-2 border-gray-200 shadow-lg rounded-lg overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={event.stampPhoto}
                    alt={event.name}
                    className="w-full h-40 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.name}</h3>
                  <p className="text-gray-700 mb-2 flex-grow">{event.description}</p>
                  <p className="text-gray-600 mb-2">Opening Call: {event.openingCall}</p>
                  <p className="text-gray-600 mb-2">Timings: {event.timings}</p>
                  <p className="text-gray-600 mb-4">Price: ₹{event.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white py-2 px-4 rounded-md mt-auto transition-colors duration-300 hover:bg-gray-800"
                  >
                    Join Event
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-lg">No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
