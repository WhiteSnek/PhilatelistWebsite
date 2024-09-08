import React from 'react';
import { Link } from 'react-router-dom';

// Sample data for product cards
const products = [
  {
    id: 1,
    image: 'https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg',
    description: 'Rare Stamp from 1965',
    price: '$200',
    category: 'Stamp',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumnJtByR9x33UZfLKTnH_okbT5s1gVuzQqQ&s',
    description: 'Limited Edition Stamp',
    price: '$350',
    category: 'Stamp',
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9uQaXLZlVgAoDfgh9esFVGaDQF8vB-8riIA&s',
    description: 'Vintage Stamp Collection',
    price: '$500',
    category: 'Collection',
  },
  // Add more products as needed
];

const BuyItems = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Buy Philatelic Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.description} className="w-full h-56 object-center object-contain my-4" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.description}</h2>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
              <Link to={`/order/${product.id}`}>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Buy Now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyItems;
