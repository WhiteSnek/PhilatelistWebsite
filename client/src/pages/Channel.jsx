import React, { useState } from "react";
import Sidebar from "../components/Home/Sidebar";
import MembersList from "../components/Members/MembersList";

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
    e.preventDefault(); // Prevent form from refreshing the page

    if (newMessage.trim() === "") return; // Don't send empty messages

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
    <div className="flex bg-gray-100 p-4">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col mx-auto max-w-4xl px-4">
        {" "}
        {/* Adjusted margin-left for the fixed sidebar */}
        <div
          className="bg-white border border-gray-300 rounded-lg shadow-md overflow-auto p-4"
          style={{ height: "calc(100vh - 11rem)" }}
        >
          {/* Chat Messages */}
          {messages.map((message) => (
            <div key={message.id} className="mb-4 p-2 border-b border-gray-200">
              <div className="font-semibold text-gray-800">{message.user}</div>
              <div className="text-gray-700">{message.text}</div>
            </div>
          ))}
        </div>
        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="bg-white border-t border-gray-300 p-4 flex items-center rounded-md">
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-red-600 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Members List */}
      <MembersList members={members} />
    </div>
  );
};

export default Channel;
