
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking'); 

router.post('/', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.post('/:id/confirm', bookingController.confirmBooking);

module.exports = router;
