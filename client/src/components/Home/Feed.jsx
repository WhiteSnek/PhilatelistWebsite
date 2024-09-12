import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExpandMore, ExpandLess } from '@mui/icons-material'; 

const posts = [
  {
    id: 1,
    userName: "Ravi Sharma",
    userAvatar: "https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid",
    postImage: "https://5.imimg.com/data5/SELLER/Default/2021/5/KA/YK/XE/128841748/old-postage-stamps.jpg",
    caption: "Rare stamp from 1970s collection",
    price: "₹150",
    postTime: "2 hours ago",
    backstory: "This rare stamp from the 1970s is a notable piece due to its unique printing error, which makes it an exceptional find for collectors. Discovered tucked away in an old family album, this stamp's significance is amplified by its historical context. The error, which resulted from a mistake during the printing process, not only adds a layer of intrigue but also increases its value among stamp enthusiasts. The stamp's unusual characteristics and the story of its discovery contribute to its charm and desirability."
  },
  {
    id: 2,
    userName: "Aarti Patel",
    userAvatar: "https://www.shutterstock.com/image-photo/profile-picture-calm-smiling-indian-260nw-1863568432.jpg",
    postImage: "https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg",
    caption: "Vintage commemorative stamp",
    price: "₹200",
    postTime: "1 day ago",
    backstory: "This vintage commemorative stamp was issued to celebrate a momentous occasion in history. Featuring an elaborate and intricate design, it reflects the artistry and craftsmanship of its era. Limited in quantity and rich in historical significance, this stamp stands out as a prized item in any collection. Its detailed artwork not only commemorates the event it was issued for but also showcases the skillful engraving techniques used during that time, making it a valuable piece for collectors seeking a touch of historical elegance."
  },
  {
    id: 3,
    userName: "Rajesh Kumar",
    userAvatar: "https://www.shutterstock.com/image-photo/male-african-east-asian-beard-260nw-2357229687.jpg",
    postImage: "https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0002.jpg",
    caption: "Rare 1847 5c Brown stamp",
    price: "₹500",
    postTime: "3 days ago",
    backstory: "The 1847 5c Brown stamp is an iconic piece of postal history, marking one of the earliest uses of postage stamps. Originating from a time when the concept of pre-paid postage was still novel, this stamp's rarity is attributed to its limited issuance and historical context. As one of the earliest examples of postal stamps, it holds immense value for collectors interested in the origins of postal systems. The stamp's historical significance is further emphasized by its condition and the stories of early postal reforms it represents."
  },
  {
    id: 4,
    userName: "Sita Devi",
    userAvatar: "https://www.bollywoodhungama.com/wp-content/uploads/2019/08/THIS-is-why-Disha-Patani-has-been-roped-in-to-be-the-face-of-this-international-brand.jpg",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5VlvN_msBC0_LJNGRJF344rQOBhzkvhOxw&s",
    caption: "Unique 19th-century stamp",
    price: "₹350",
    postTime: "1 week ago",
    backstory: "This 19th-century stamp is an intriguing piece of postal history, distinguished by its unique color and design. Issued during a time of significant transition in postal services, this stamp represents a pivotal moment in the evolution of postage. Its unusual features and the era it hails from contribute to its rarity and allure. The stamp's historical backdrop, marked by changes in postal regulations and designs, adds depth to its story and makes it a valuable addition to any collection focused on the 19th century."
  },
  {
    id: 5,
    userName: "Amit Verma",
    userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUj2aXn4XZLV703G5UhvYrrnxgCA5L7QHlw&s",
    postImage: "https://pic.ebid.net/upload_big/7/9/3/1682558369-12333-0.jpg",
    caption: "Limited edition stamp from the 1800s",
    price: "₹250",
    postTime: "2 weeks ago",
    backstory: "This limited edition stamp from the 1800s stands out due to its restricted issuance and historical significance. Released in a small quantity, it reflects the postal practices and artistic styles of its time. Its rarity is accentuated by the limited number of stamps produced, making it a highly sought-after item for collectors. The historical context of its release, along with its distinctive design, makes it a valuable piece that highlights the evolution of postage and printing technology during the 19th century."
  },
  {
    id: 6,
    userName: "Neha Singh",
    userAvatar: "https://wallpapers.com/images/hd/indian-woman-profile-in-colorful-top-0putj2ni5kvq074b.jpg",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibtmMYZnqTmhhnhO70qxONtGEryUtqoJ1MA&s",
    caption: "Rare misprinted stamp",
    price: "₹450",
    postTime: "3 weeks ago",
    backstory: "This rare misprinted stamp is a unique find due to the printing error that occurred during its production. Such errors are particularly coveted by collectors because they represent anomalies in the printing process. The misprint has become a significant point of interest, highlighting the complexities of stamp production and the historical value of errors. This stamp's unusual characteristics and the story behind its creation make it an intriguing piece for those interested in the quirks of postal history."
  },
  {
    id: 7,
    userName: "Vikram Sharma",
    userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBIAr84wv_bgvvH4RLls8km6YykgH_0fiMw&s",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJNkluLwLr58g2-5Zvvxbk37MBcqQfXlEeg&s",
    caption: "Historical stamp with printing error",
    price: "₹600",
    postTime: "1 month ago",
    backstory: "This historical stamp is renowned for its significant printing error, which occurred during a crucial period in postal history. The error, which is both rare and noteworthy, adds considerable value to the stamp, making it a key piece for serious collectors. The error not only represents a rare production anomaly but also reflects the technological and procedural challenges of the time. Its historical context and the error itself provide a fascinating glimpse into the early days of postal stamp production."
  },
  {
    id: 8,
    userName: "Pooja Gupta",
    userAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjhH9JE8PzTw1bAo66ZaAa9JVbj8gCfB2QA&s",
    postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumnJtByR9x33UZfLKTnH_okbT5s1gVuzQqQ&s",
    caption: "Rare stamp from early 20th century",
    price: "₹350",
    postTime: "6 weeks ago",
    backstory: "This rare stamp from the early 20th century is a standout piece due to its limited issuance and distinctive design. It captures a significant period in postal history, marked by innovations and changes in postal services. The stamp's rarity is underscored by its unique features and the historical context of its release. As a representation of early 20th-century postal practices, it is highly valued by collectors for its historical significance and the glimpse it provides into the era's postal system."
  }
];

const Feed = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostCard = ({ post }) => {
  const [showBackstory, setShowBackstory] = useState(true);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg border-2 border-black p-4 mb-6 overflow-hidden relative"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >

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

      <div >
        <div className="relative"> 
        <motion.img
          src={post.postImage}
          alt="Philatelic Item"
          className={`w-full h-96 object-cover rounded-lg mb-4 cursor-pointer transition-all duration-300 ${showBackstory ? 'opacity-50' : 'opacity-100'}`}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        />

        {showBackstory && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black  to-transparent text-white p-4 flex flex-col justify-end rounded-lg"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-md">{post.backstory}</p>
            <button
              className="mt-2 text-gray-200 hover:text-white"
              onClick={() => setShowBackstory(false)}
            >
              <ExpandMore />
            </button>
          </motion.div>
        )}
        {!showBackstory && (
          <button
            className="absolute bottom-2 right-2 hover:bg-gray-800 text-white bg-black p-1 rounded-full aspect-square flex justify-center items-center transition-colors"
            onClick={() => setShowBackstory(true)}
          >
            <ExpandLess />
          </button>
        )}
        </div>

        <p className="text-gray-800 text-sm mb-2">{post.caption}</p>
        <p className="text-lg font-semibold mb-4">{post.price}</p>

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
  );
};

export default Feed;
