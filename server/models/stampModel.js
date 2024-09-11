const mongoose = require('mongoose');

// Define Stamp Schema
const stampSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    issueDate: {
      type: Date,
      required: [true, 'Issue Date is required'],
    },
    countryOfOrigin: {
      type: String,
      required: [true, 'Country of Origin is required'],
    },
    theme: {
      type: String,
      enum: ['historical', 'nature', 'art', 'sports', 'space', 'culture'],
      required: [true, 'Theme is required'],
    },
    rarityLevel: {
      type: String,
      enum: ['common', 'rare', 'very rare'],
      default: 'common',
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    philatelist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Philatelist', // Reference to Philatelist model
      required: [true, 'Philatelist reference is required'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Update updatedAt field before saving
stampSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Stamp = mongoose.model('Stamp', stampSchema);

module.exports = Stamp;
