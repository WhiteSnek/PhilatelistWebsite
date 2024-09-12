import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BiddingEvent = () => {
  const [bidAmount, setBidAmount] = useState('');
  const [leaderboard, setLeaderboard] = useState([
    { name: 'Rahul Mehta', bid: 1500 },
    { name: 'Priya Sharma', bid: 1350 },
    { name: 'Rohit Gupta', bid: 1250 },
    { name: 'Anjali Verma', bid: 1150 },
    { name: 'Karan Patel', bid: 1100 },
    { name: 'Pooja Singh', bid: 1000 }
  ]);
  const [userBid, setUserBid] = useState(1);

  const handleBid = () => {
    const bid = Number(bidAmount);
    
    if (isNaN(bid) || bid <= 0) {
      alert("Please enter a valid bid amount");
      return;
    }
  
    const updatedLeaderboard = [
      ...leaderboard,
      { name: 'You', bid: bid }
    ];
  

    const sortedLeaderboard = updatedLeaderboard.sort((a, b) => b.bid - a.bid);
  

    setUserBid({ name: 'You', bid: bid });
  

    setLeaderboard(sortedLeaderboard.filter(bidder => bidder.name !== 'You'));
  

    setBidAmount('');
  };
  

  const getUserRank = () => {
    if (!userBid) return null;
    const allBidders = [...leaderboard, userBid].sort((a, b) => b.bid - a.bid);
    return allBidders.findIndex(bidder => bidder.name === 'You') + 1;
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex justify-center items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >

        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Auction: Rare Vintage Stamp
        </motion.h1>

        <div className="flex flex-col md:flex-row justify-between">

          <motion.div
            className="w-full md:w-1/3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJNkluLwLr58g2-5Zvvxbk37MBcqQfXlEeg&s"
              alt="Stamp"
              className="rounded-lg w-full object-cover mb-6 md:mb-0"
            />
          </motion.div>


          <motion.div className="w-full md:w-2/3 md:pl-6">
            <motion.h2
              className="text-2xl font-bold mb-4"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Stamp Information
            </motion.h2>
            <div className="mb-4">
              <p><strong>Number of Stamps:</strong> 50</p>
              <p><strong>Category:</strong> Historical</p>
              <p><strong>Type:</strong> Limited Edition</p>
            </div>


            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Backstory</h3>
              <p className="text-gray-700">
                This rare stamp from the early 20th century is a standout piece due to its limited issuance and distinctive design. It captures a significant period in postal history, marked by innovations and changes in postal services.
              </p>
            </div>


            <div className="mb-4">
              <p><strong>Starting Price:</strong> ₹300</p>
            </div>
          </motion.div>
        </div>


        <motion.div className="mt-8">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Top Bidders
          </motion.h2>
          <motion.table
            className="min-w-full bg-gray-100 border border-gray-300 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <thead>
              <tr className="bg-black text-white text-left">
                <th className="p-3">Rank</th>
                <th className="p-3">Bidder</th>
                <th className="p-3">Bid</th>
              </tr>
            </thead>
            <tbody>
              {userBid && (
                <motion.tr
                  className="border-b border-gray-300 bg-yellow-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <td className="p-3">{getUserRank()}</td>
                  <td className="p-3">{userBid.name}</td>
                  <td className="p-3">₹{userBid.bid}</td>
                </motion.tr>
              )}
              {[...leaderboard, userBid]
                .sort((a, b) => b.bid - a.bid)
                .map((bidder, index) => (
                  <motion.tr
                    key={index}
                    className={`border-b border-gray-300 ${bidder.name === 'You' ? 'bg-yellow-100' : ''}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{bidder.name}</td>
                    <td className="p-3">₹{bidder.bid}</td>
                  </motion.tr>
                ))}
            </tbody>
          </motion.table>
        </motion.div>

        <motion.div className="mt-8">
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Place Your Bid
          </motion.h2>
          <div className="flex items-center">
            <div className="relative w-full sm:w-3/4">
              <label htmlFor="bidAmount" className="text-sm text-gray-600">Enter Your Bid Amount (₹)</label>
              <input
                id="bidAmount"
                type="text"
                pattern="[0-9]*"
                className="mt-2 border border-gray-400 p-3 w-full rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                placeholder="Enter amount in INR"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <motion.button
                onClick={handleBid}
                className="bg-black absolute top-8 right-0 text-white py-3 pb-3.5 px-6 transition-colors duration-300 hover:bg-gray-800 focus:ring-2 focus:ring-black ml-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Place Bid
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BiddingEvent;
