import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import stamp1 from '../../assets/stamps/stamp1.jpg'
import stamp2 from '../../assets/stamps/stamp2.jpg'

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title: "Rare Indian Stamps from the 1900s",
      author: "John Doe",
      date: "Sep 1, 2024",
      snippet: "This is the full article content about Rare Indian Stamps from the 1900s.",
      image : stamp1 , 
      content:
        "This is the full article content about Rare Indian Stamps from the 1900s. It goes into detail about the history, rarity, and value of the stamps from that era...",
    },
    {
      id: 2,
      title: "Understanding Stamp Grading",
      author: "Jane Smith",
      date: "Aug 25, 2024",
      image : stamp2 ,
      snippet: "This is the full article content about Understanding Stamp Grading.",
      content:
        "This is the full article content about Understanding Stamp Grading. It covers the various grades, what they mean, and how they affect stamp value...",
    },
  ];

  return (
    <motion.section
      className="py-12 bg-white"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <div>
      <h2 className="text-2xl font-bold text-center text-gray-900">
        Featured Articles
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className="border border-gray-300 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
          <img src={article.image} className="w-full h-60"/>
            </div>
            <h3 className="text-xl font-semibold">{article.title}</h3>
            <p className="text-gray-500">
              By {article.author} • {article.date}
            </p>
            <p className="mt-4 text-gray-700">{article.snippet}</p>
            <Link
              to={`/article/${article.id}`}
              className="mt-4 block text-blue-500 hover:underline"
            >
              Read More
            </Link>
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
};

export default ArticleList;
