const mongoose = require('mongoose');

// Event Schema
const eventSchema = new mongoose.Schema(
  {
    // Event title
    title: {
      type: String,
      required: true,
    },

    // Event description/details
    description: {
      type: String,
      required: true,
    },

    // Event date and time
    date: {
      type: Date,
      required: true,
    },

    // Event location (e.g., city, venue)
    location: {
      type: String,
      required: true,
    },

    // Event category (e.g., music, tech, sports)
    category: {
      type: String,
      required: true,
    },

    // Total number of seats
    totalSeats: {
      type: Number,
      required: true,
    },

    // Remaining available seats
    availableSeats: {
      type: Number,
      required: true,
    },

    // Event image URL (optional)
    image: {
      type: String,
    },

    // Ticket price (default is free)
    ticketPrice: {
      type: Number,
      required: true,
      default: 0,
    },

    // Reference to the user/admin who created the event
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);


module.exports = mongoose.model('Event', eventSchema);