import React, { useState, useEffect, useRef } from "react";
import {
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Chat as ChatIcon, Send as SendIcon } from "@mui/icons-material";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "chatbot" },
  ]);
  const [input, setInput] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket('ws://localhost:8765');
    socketRef.current = socket;

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      console.log('Message received:', event.data); // Debug log
      const response = event.data;
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: response, sender: "chatbot" },
      ]);
      scrollToBottom();
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (input.trim()) {
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(input);
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: input, sender: "user" },
        ]);
        setInput("");
        scrollToBottom();
      } else {
        console.error('WebSocket is not connected');
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Floating Button */}
      <IconButton
        onClick={handleToggle}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "black",
          color: "white",
        }}
        size="large"
      >
        <ChatIcon />
      </IconButton>

      {/* Chatbox */}
      {isOpen && (
        <Paper
          style={{
            position: "fixed",
            bottom: 80,
            right: 20,
            width: 360, // Increased width
            maxHeight: 500, // Increased height
            display: "flex",
            flexDirection: "column",
            borderRadius: 8,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Message List */}
          <List style={{ flex: 1, overflowY: "auto", padding: 16 }}>
            {messages.map((message) => (
              <ListItem
                key={message.id}
                style={{
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <ListItemText
                  primary={message.text}
                  style={{
                    backgroundColor:
                      message.sender === "user" ? "#DCF8C6" : "#f1f0f0",
                    color: message.sender === "user" ? "black" : "black",
                    borderRadius: 10,
                    padding: "8px 16px",
                    maxWidth: "70%",
                  }}
                />
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>

          {/* Input Field */}
          <div className="flex items-center border-t border-gray-300 p-2 bg-white rounded-b-md"> 
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 py-2 px-4 border border-gray-300 rounded-full  focus:outline-none  resize-none"
              rows="2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <IconButton onClick={handleSend} style={{ color: "black" }}>
              <SendIcon />
            </IconButton>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default Chatbot;
