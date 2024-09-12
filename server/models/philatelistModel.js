const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Define enum values for interests and specializations
const INTERESTS_ENUM = ['stamps', 'themes', 'eras', 'custom']; // Can be expanded
const SPECIALIZATION_ENUM = ['newbie', 'classic stamps', 'modern stamps', 'international stamps', 'custom'];

// Helper regex patterns for validation
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Basic email format validation
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/; // At least 7 characters, one number, one special symbol
const INDIAN_POSTAL_CODE_REGEX = /^[1-9][0-9]{5}$/; // Validates Indian postal codes
const URL_REGEX = /^(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\w\.\-~:/?#[\]@!$&'()*+,;=]*)?$/; // URL format
const SOCIAL_MEDIA_LINKS_REGEX = URL_REGEX; // Reuse the same URL regex for social media links


// Define the Philatelist Schema
const philatelistSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Confirm password is required'],
    validate: {
      validator: function (value) {
        return value === this.password; // Ensure confirmPassword matches password
      },
      message: 'Passwords do not match.',
    },
  },
  interestInPhilately: {
    type: String,
    enum: ['stamps', 'themes', 'eras', 'other'],
  },
  areasOfSpecialisation: {
    type: String,
    enum: ['stamps', 'themes', 'eras', 'default'],
    default: 'newbie',
  },
  yearsOfExperience: {
    type: Number,
    default: 0,
  },
  postalCode: {
    type: String,
    required: [true, 'Postal code is required'],
    match: [/^\d{6}$/, 'Please enter a valid Indian postal code.'],
  },
  favouriteStampIssued: {
    type: String,
    default: 'None',
  },
  profilePicture: {
    type: String,
    required: true,
    default: 'https://example.com/default-avatar.png', // Replace with your frontend's default avatar URL
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  socialMediaLinks: {
    type: Map,
    of: String,
    required: false, // Optional field
  },
  
  wishlistTags: {
    type: [String],
  },
  receiveNewsletter: {
    type: Boolean,
    default: false,
  },
  notifyAboutReleases: {
    type: Boolean,
    default: false,
  },
  interestedInEvents: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

// Pre-save hook to hash the password before saving
philatelistSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = undefined; // Prevent confirmPassword from being saved
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password for login
philatelistSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create the Philatelist model
const Philatelist = mongoose.model('Philatelist', philatelistSchema);

module.exports = Philatelist;
