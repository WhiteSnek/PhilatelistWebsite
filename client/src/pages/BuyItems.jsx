import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from '../components/Events/Filter'; // Ensure the filter component is available
import { useNavigate } from 'react-router-dom';

// Sample data for products
const products = [
  {
    id: 1,
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/KA/YK/XE/128841748/old-postage-stamps.jpg',
    description: 'Rare stamp from 1970s collection',
    price: '₹150',
    category: 'Stamp',
  },
  {
    id: 2,
    image: 'https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg',
    description: 'Vintage commemorative stamp',
    price: '₹200',
    category: 'Stamp',
  },
  {
    id: 3,
    image: 'https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0002.jpg',
    description: 'Rare 1847 5c Brown stamp',
    price: '₹500',
    category: 'Stamp',
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5VlvN_msBC0_LJNGRJF344rQOBhzkvhOxw&s',
    description: 'Unique 19th-century stamp',
    price: '₹350',
    category: 'Stamp',
  },
  {
    id: 5,
    image: 'https://pic.ebid.net/upload_big/7/9/3/1682558369-12333-0.jpg',
    description: 'Limited edition stamp from the 1800s',
    price: '₹250',
    category: 'Stamp',
  },
  {
    id: 6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibtmMYZnqTmhhnhO70qxONtGEryUtqoJ1MA&s',
    description: 'Rare misprinted stamp',
    price: '₹450',
    category: 'Stamp',
  },
  {
    id: 7,
    image: 'https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg',
    description: 'Historical stamp with printing error',
    price: '₹600',
    category: 'Stamp',
  },
  {
    id: 8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumnJtByR9x33UZfLKTnH_okbT5s1gVuzQqQ&s',
    description: 'Rare stamp from early 20th century',
    price: '₹350',
    category: 'Stamp',
  },
];


const BuyItems = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000]
  });

  const navigate = useNavigate();

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.categories.length === 0 || filters.categories.includes(product.category)) &&
      parseFloat(product.price.replace('₹', '')) >= filters.priceRange[0] &&
      parseFloat(product.price.replace('₹', '')) <= filters.priceRange[1]
    );
  });

  return (
    <div className="flex">
      {/* Sidebar filter */}
      <Filter onFilterChange={applyFilters} />
      <div className="p-4 flex-1 ml-[21rem]">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">Buy Philatelic Items</h1>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-lg flex flex-col"
              >
                <div className="overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.description}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.description}</h2>
                  <p className="text-gray-600 mb-2">Category: {product.category}</p>
                  <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-4 py-2 rounded-md mt-auto transition-colors duration-300 hover:bg-gray-800"
                    onClick={() => navigate(`/order/${product.id}`)}
                  >
                    Buy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-lg text-center">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default BuyItems;
