const express = require('express');
const { addToNewsLetter } = require('../controllers/centralController');
const router = express.Router();



router.post('/', addToNewsLetter);
module.exports = router;
