const mongoose = require('mongoose');

// Booking Schema
const bookingSchema = new mongoose.Schema(
  {
    // Reference to the user who made the booking
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // Reference to the event being booked
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
    },

    // Booking status
    status: {
      type: String,
      enum: ['confirmed', 'cancelled', 'pending'],
      default: 'pending',
    },

    // Payment status
    paymentStatus: {
      type: String,
      enum: ['paid', 'not_paid'],
      default: 'not_paid',
    },

    // Total booking amount
    amount: {
      type: Number,
      required: true,
    },

    // Booking date
    bookedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);


module.exports = mongoose.model('Booking', bookingSchema);

