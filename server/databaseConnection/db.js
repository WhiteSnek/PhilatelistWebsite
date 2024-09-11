const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB connection URI for the local database
// const mongoURI = 'mongodb://localhost:27017/philatelyDB'; // Replace 'philatelyDB' with your desired database name

const mongoURI = process.env.MONGO_URL_ATLAS
// console.log(mongoURI)
// Function to connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
