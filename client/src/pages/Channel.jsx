import React, { useState } from "react";
import Sidebar from "../components/Home/Sidebar";
import MembersList from "../components/Members/MembersList";
import { motion } from "framer-motion";
import SendIcon from '@mui/icons-material/Send';

const Channel = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Alice", text: "Hello everyone!" },
    { id: 2, user: "Bob", text: "Hi Alice!" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault(); 

    if (newMessage.trim() === "") return; 

    setMessages([
      ...messages,
      { id: messages.length + 1, user: "Me", text: newMessage },
    ]);
    setNewMessage("");
  };

  const members = [
    { id: "1", name: "Alice", role: "Admin" },
    { id: "2", name: "Bob", role: "Member" },
    { id: "3", name: "Charlie", role: "Member" },
  ];

  return (
    <div className="flex bg-gray-100 p-2.5">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-2 mx-auto max-w-4xl px-4 ">

        <div
          className="bg-white rounded-lg shadow-md overflow-auto p-4 border-black border-2"
          style={{ height: "calc(100vh - 11.5rem)" }}
        >

          {messages.map((message) => (
            <div key={message.id} className="mb-4 p-2 border-b border-gray-200">
              <div className="font-semibold text-gray-800">{message.user}</div>
              <div className="text-gray-700">{message.text}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="bg-white border-black border-2 p-4 flex items-center rounded-md">
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
          >
            <motion.div
              whileHover={{ x: 5 }}  
              whileTap={{ x: 2 }}    
              transition={{ type: 'spring', stiffness: 300, damping: 20 }} 
            >
              <SendIcon />
            </motion.div>
          </button>
        </form>
      </div>


      <MembersList members={members} />
    </div>
  );
};

export default Channel;
