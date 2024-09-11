import React from "react";
import landingPage from "../../assets/landingPage.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Products array remains the same
const products = [
  {
    id: 1,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/5/KA/YK/XE/128841748/old-postage-stamps.jpg",
    description: "Rare stamp from 1970s collection",
    state: "Maharashtra",
    price: "₹900",
    category: "Stamp",
  },
  {
    id: 2,
    image:
      "https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg",
    description: "Vintage commemorative stamp",
    state: "Gujarat",
    price: "₹300",
    category: "Stamp",
  },
  {
    id: 3,
    image:
      "https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0002.jpg",
    description: "Rare 1847 5c Brown stamp",
    state: "Maharashtra",
    price: "₹650",
    category: "Stamp",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5VlvN_msBC0_LJNGRJF344rQOBhzkvhOxw&s",
    description: "Unique 19th-century stamp",
    state: "Maharashtra",
    price: "₹700",
    category: "Stamp",
  },
  {
    id: 5,
    image: "https://pic.ebid.net/upload_big/7/9/3/1682558369-12333-0.jpg",
    description: "Limited edition stamp from the 1800s",
    state: "Maharashtra",
    price: "₹300",
    category: "Stamp",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibtmMYZnqTmhhnhO70qxONtGEryUtqoJ1MA&s",
    description: "Rare misprinted stamp",
    state: "Maharashtra",
    price: "₹300",
    category: "Stamp",
  },
  {
    id: 7,
    image:
      "https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg",
    description: "Historical stamp with printing error",
    state: "Maharashtra",
    price: "₹300",
    category: "Stamp",
  },
  {
    id: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumnJtByR9x33UZfLKTnH_okbT5s1gVuzQqQ&s",
    description: "Rare stamp from early 20th century",
    state: "Maharashtra",
    price: "₹900",
    category: "Stamp",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <motion.div
        className="relative w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          className="h-screen md:h-96 w-full object-cover "
          src='https://images-cdn.ubuy.co.in/633ed4b443018c653013e615-1000-used-worldwide-postage-stamps.jpg'
          alt="landing-page"
        />
        <div className="absolute inset-0  bg-black opacity-70 px-10 lg:px-16 " />
        <div className="absolute inset-0 py-10 lg:py-20 flex flex-col md:flex-row md:justify-around">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="font-bold text-4xl lg:text-5xl text-white ">
              Discover unique stamps on
            </h2>
            <h2 className="font-bold text-4xl lg:text-5xl text-red-500 mx-auto">
              Dak Connect
            </h2>
            <h2 className="font-bold text-4xl lg:text-5xl text-white mb-4 mx-auto">
              Portal
            </h2>
            <p className="mt-2 text-lg text-white">
              Explore a variety of philatelic treasures personalized for you!
            </p>
          </motion.div>
          <Link to="/login">
            <motion.button
              className="text-white bg-red-500 px-8 py-4 text-xl rounded-sm"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, backgroundColor: "#dc2626" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
        {/* </div> */}
      </motion.div>

      {/* Featured Collections */}
      <section className="p-8 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-4 text-gray-800">
          Featured Collections
        </h3>
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {products.map((collection, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={collection.image}
                alt="Stamp"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">
                  {collection.state}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Top Picks by Collectors */}
      <section className="p-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Top Picks by Collectors
        </h3>
        <motion.div
          className="grid grid-cols-5 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          {products.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a href="#">
                <img
                  className="p-8 rounded-t-lg h-60 w-96"
                  src={item.image}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {item.description}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {/* Add rating icons */}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-gray-900">
                    {item.price}
                  </p>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Know more
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="text-center">
          <p>Dak Connect © 2024 | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
