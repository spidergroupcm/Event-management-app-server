const mongoose = require('mongoose');

// OTP Schema
const otpSchema = new mongoose.Schema({
  // User email for which OTP is generated
  email: {
    type: String,
    required: true,
  },

  // One-time password
  otp: {
    type: String,
    required: true,
  },

  // Purpose of the OTP
  action: {
    type: String,
    enum: ['account_verification', 'event_booking'],
    required: true,
  },

  // Creation time (auto expires after 5 minutes)
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // 300 seconds = 5 minutes
  },
});

// Export OTP model
module.exports = mongoose.model('OTP', otpSchema);