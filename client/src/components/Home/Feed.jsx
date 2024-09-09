import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Sample data for posts, replace this with dynamic data from your backend
const posts = [
  {
    id: 1,
    userName: "Ravi Sharma",
    userAvatar: "https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid",
    postImage: "https://5.imimg.com/data5/SELLER/Default/2021/5/KA/YK/XE/128841748/old-postage-stamps.jpg",
    caption: "Rare stamp from 1970s collection",
    price: "₹150",
    postTime: "2 hours ago",
  },
  {
    id: 2,
    userName: "Aarti Patel",
    userAvatar: "https://www.shutterstock.com/image-photo/profile-picture-calm-smiling-indian-260nw-1863568432.jpg",
    postImage: "https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg",
    caption: "Vintage commemorative stamp",
    price: "₹200",
    postTime: "1 day ago",
  },
  {
    id: 3,
    userName: "Rajesh Kumar",
    userAvatar: "https://www.shutterstock.com/image-photo/male-african-east-asian-beard-260nw-2357229687.jpg",
    postImage: "https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0002.jpg",
    caption: "Rare 1847 5c Brown stamp",
    price: "₹500",
    postTime: "3 days ago",
  },
  {
    id: 4,
    userName: "Sita Devi",
    userAvatar: "https://www.bollywoodhungama.com/wp-content/uploads/2019/08/THIS-is-why-Disha-Patani-has-been-roped-in-to-be-the-face-of-this-international-brand.jpg",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5VlvN_msBC0_LJNGRJF344rQOBhzkvhOxw&s",
    caption: "Unique 19th-century stamp",
    price: "₹350",
    postTime: "1 week ago",
  },
  {
    id: 5,
    userName: "Amit Verma",
    userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUj2aXn4XZLV703G5UhvYrrnxgCA5L7QHlw&s",
    postImage: "https://pic.ebid.net/upload_big/7/9/3/1682558369-12333-0.jpg",
    caption: "Limited edition stamp from the 1800s",
    price: "₹250",
    postTime: "2 weeks ago",
  },
  {
    id: 6,
    userName: "Neha Singh",
    userAvatar: "https://wallpapers.com/images/hd/indian-woman-profile-in-colorful-top-0putj2ni5kvq074b.jpg",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibtmMYZnqTmhhnhO70qxONtGEryUtqoJ1MA&s",
    caption: "Rare misprinted stamp",
    price: "₹450",
    postTime: "3 weeks ago",
  },
  {
    id: 7,
    userName: "Vikram Sharma",
    userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBIAr84wv_bgvvH4RLls8km6YykgH_0fiMw&s",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJNkluLwLr58g2-5Zvvxbk37MBcqQfXlEeg&s",
    caption: "Historical stamp with printing error",
    price: "₹600",
    postTime: "1 month ago",
  },
  {
    id: 8,
    userName: "Pooja Gupta",
    userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjhH9JE8PzTw1bAo66ZaAa9JVbj8gCfB2QA&s",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumnJtByR9x33UZfLKTnH_okbT5s1gVuzQqQ&s",
    caption: "Rare stamp from early 20th century",
    price: "₹350",
    postTime: "6 weeks ago",
  },
];

const Feed = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {posts.map((post) => (
        <motion.div
          key={post.id}
          className="bg-white rounded-lg shadow-lg border-2 border-black p-4 mb-6 overflow-hidden"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* User Info */}
          <div className="flex items-center mb-4">
            <img
              src={post.userAvatar}
              alt={post.userName}
              className="rounded-full w-12 h-12 mr-4 object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg">{post.userName}</h2>
              <p className="text-gray-500 text-sm">{post.postTime}</p>
            </div>
          </div>

          {/* Post Content */}
          <div>
            <motion.img
              src={post.postImage}
              alt="Philatelic Item"
              className="w-full rounded-lg mb-4 cursor-pointer"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-800 text-sm mb-2">{post.caption}</p>
            <p className="text-lg font-semibold  mb-4">
              {post.price}
            </p>

            {/* Buy Button */}
            <Link to={`/order/${post.id}`}>
              <motion.button
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                Buy Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Feed;
