import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import stamp1 from '../../assets/stamps/stamp1.jpg'
import stamp2 from '../../assets/stamps/stamp2.jpg'
const FullArticle = () => {
  const { id } = useParams();
  const articles = [
    {
      id: 1,
      title: "Rare Indian Stamps from the 1900s",
      author: "John Doe",
      date: "Sep 1, 2024",
      image: stamp1, 
      content:
        "This is the full article content about Rare Indian Stamps from the 1900s. It goes into detail about the history, rarity, and value of the stamps from that era...",
    },
    {
      id: 2,
      title: "Understanding Stamp Grading",
      author: "Jane Smith",
      date: "Aug 25, 2024",
      image: stamp2, 
      content:
        "This is the full article content about Understanding Stamp Grading. It covers the various grades, what they mean, and how they affect stamp value...",
    },
  ];

  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) return <div>Article not found</div>;

  return (
    <motion.div
      className="container mx-auto py-12 px-4 md:px-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        {article.title}
      </h1>
      <p className="text-gray-600 text-lg text-center mb-4">
        By {article.author} • {article.date}
      </p>

      <div className="flex justify-center mb-8">
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.p
        className="text-gray-800 leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {article.content}
      </motion.p>

      <div className="mt-8 border-t pt-4 text-gray-500 text-center">
        <p>Published on {article.date} by {article.author}</p>
      </div>
    </motion.div>
  );
};

export default FullArticle;
