const Booking = require("../models/Booking");
const NewsletterSubscriber = require("../models/NewsletterSubscriber");


exports.submitBookingRequest = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      workshops,
      website,
      organization,
      message,
    } = req.body;

    // Basic check (you can use Joi or express-validator later)
    if (!firstName || !lastName || !email || !phoneNumber || !country || !city || !workshops || !organization || !message) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const booking = new Booking({
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      city,
      workshops,
      website,
      organization,
      message,
    });

    await booking.save();

    
    return res.status(201).json({
      message: 'Booking request submitted successfully.',
      booking,
    });
  } catch (error) {
    console.error('Error submitting booking request:', error);
    return res.status(500).json({ message: 'Server error. Try again later.' });
  }
};

exports.addToNewsLetter = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if already subscribed
    const existing = await NewsletterSubscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Already subscribed.' });
    }

    const subscriber = new NewsletterSubscriber({ email });
    await subscriber.save();

    return res.status(201).json({
      message: 'Successfully subscribed to the newsletter.',
      subscriber,
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ message: 'Server error. Try again later.' });
  }
};
