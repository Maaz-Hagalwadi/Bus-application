// // routes/selectedSeatsRoutes.js

// const express = require('express');
// const router = express.Router();
// const selectedSeatsController = require('../controllers/SelectedSeatsController');

// // POST request to create a new booking
// router.post('/', selectedSeatsController.createBooking);

// // GET request to retrieve bookings by busId
// router.get('/:busId', selectedSeatsController.getBookingsByBusId);

// router.get('/seats/:busId', selectedSeatsController.getSelectedSeatsByBusId);



// module.exports = router;
// routes/selectedSeatsRoutes.js

const express = require('express');
const router = express.Router();
const selectedSeatsController = require('../controllers/SelectedSeatsController');

router.post('/', selectedSeatsController.createBooking);


router.get('/:busId', selectedSeatsController.getBookingsByBusId);

router.get('/seats/:busId', selectedSeatsController.getSelectedSeatsByBusId);

router.delete('/:busId/:selectedSeat', selectedSeatsController.deleteBookingsByBusIdAndSelectedSeat);

router.get('/', selectedSeatsController.getAllBookings);

module.exports = router;
