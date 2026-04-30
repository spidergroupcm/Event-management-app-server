const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema(
  {
    // Full name of the user
    name: {
      type: String,
      required: true,
    },

    // User email (must be unique)
    email: {
      type: String,
      required: true,
      unique: true,
    },

    // Hashed password
    password: {
      type: String,
      required: true,
    },

    // User role (default: normal user)
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },

    // Email/account verification status
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

// Export User model
module.exports = mongoose.model('User', userSchema);