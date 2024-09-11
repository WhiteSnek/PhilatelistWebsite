const jwt = require('jsonwebtoken');
const Philatelist = require('../models/philatelistModel');
const dotenv = require('dotenv');
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET
console.log(JWT_SECRET);
// Philatelist Sign-In
const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the philatelist by email
    const philatelist = await Philatelist.findOne({ email });
    if (!philatelist) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Check if password matches
    const isMatch = await philatelist.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ philatelistId: philatelist._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send token to the client
    res.json({ token });
    console.log(token);
  } catch (error) {
    console.error('SignIn Error:', error); 
    res.status(500).json({ message: 'Server error.' });
  }
};

module.exports = { signIn };
