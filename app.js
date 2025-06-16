const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const bookingRoutes = require('./routes/bookingRoutes.js');
const newsletterRoutes = require('./routes/newsletterRoutes.js');
const cookieParser = require('cookie-parser');

const app = express();
const connectDB = require('./config/db');

dotenv.config(); // Load environment variables

connectDB();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://sangita-ten.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Content-Length", "X-Requested-With"],
}));



app.use(bodyParser.json());
app.use(cookieParser());

app.options(/.*/, cors({
  origin: ["http://localhost:5173", "https://sangita-ten.vercel.app"],
  credentials: true,
}));


// Routes
app.use('/api/submit-booking', bookingRoutes);
app.use('/api/sub-newsletter', newsletterRoutes);

// Health Check Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to SGD API!' });
});

module.exports = app;
