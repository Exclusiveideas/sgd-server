const express = require('express');
const { submitBookingRequest } = require('../controllers/centralController');
const router = express.Router();



router.post('/', submitBookingRequest);
module.exports = router;
