const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  workshops: { type: String, required: true },
  website: { type: String },
  organization: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', BookingSchema);
