import React from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
  const { id } = useParams(); // Extracting the post ID from the URL

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
          
          {/* Product Image */}
          <div className="flex-shrink-0">
            <img
              src="https://admin.itsnicethat.com/images/y3rvv5Uu0KVnMHb-qp28a23Jeuo=/233352/format-webp%7Cwidth-2880/Duc_Luong-Graphic-Design-Project-itsnicethat-13.jpg" 
              alt="Stamp"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Beautiful Stamp Collection</h1>

            {/* Price */}
            <div className="text-4xl font-semibold text-red-500 mb-6">
              ₹599
            </div>

            {/* Buyer Details */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">Buyer Information</h2>
              <p><span className="font-semibold">Name:</span> John Doe</p>
              <p><span className="font-semibold">Email:</span> johndoe@example.com</p>
              <p><span className="font-semibold">Address:</span> 123 Street, City, Country</p>
            </div>

            {/* Payment Options */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">Payment Options</h2>
              <select className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="credit-card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="net-banking">Net Banking</option>
                <option value="cash-on-delivery">Cash on Delivery</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              {/* Add to Wishlist Button */}
              <button className="flex items-center px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200 transition">
                Add to Wishlist
              </button>

              {/* Buy Now Button */}
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
