import React from 'react'
import { Link } from 'react-router-dom';

// Sample data for posts, replace this with dynamic data from your backend
const posts = [
    {
      id: 1,
      userName: "John Doe",
      userAvatar: "https://via.placeholder.com/50",
      postImage: "https://5.imimg.com/data5/SELLER/Default/2021/5/KA/YK/XE/128841748/old-postage-stamps.jpg",
      caption: "Rare stamp from 1970s collection",
      price: "$150",
      postTime: "2 hours ago",
    },
    {
      id: 2,
      userName: "Jane Smith",
      userAvatar: "https://via.placeholder.com/50",
      postImage: "https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg",
      caption: "Vintage commemorative stamp",
      price: "$200",
      postTime: "1 day ago",
    },
    // Add more posts here...
  ];

const Feed = () => {
  return (
    <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex items-center mb-4">
              <img
                src={post.userAvatar}
                alt={post.userName}
                className="rounded-full w-12 h-12 mr-4"
              />
              <div>
                <h2 className="font-semibold">{post.userName}</h2>
                <p className="text-gray-500 text-sm">{post.postTime}</p>
              </div>
            </div>
            <div>
              <img
                src={post.postImage}
                alt="Philatelic Item"
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-800 mb-2">{post.caption}</p>
              <p className="text-lg font-semibold text-red-500 mb-4">
                {post.price}
              </p>
              <Link to={`/order/${post.id}`}>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Buy Now
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Feed
