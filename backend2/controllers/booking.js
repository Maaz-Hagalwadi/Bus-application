// const { Booking } = require('../db/bookingModel'); 
// const { Passenger } = require('../db/passenger'); 
// const { sequelize } = require('../db/dbConnectionsModel'); 

// // Function to create a new booking
// const createBooking = async (req, res) => {
//   const bookingData = req.body; // Assuming the request body contains all necessary booking data
//   // const passengerDetails=req.body.passengerDetails;
//   const transaction = await sequelize.transaction();

//   try {
//     console.log(bookingData.busId)
//     // console.log("busid",bookingData.busId.busId);
// console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
//     // Explicitly map the fields from the request body to the booking model attributes
//     const booking = await Booking.create({
//       customerName: bookingData.customerName,
//       phoneNumber: bookingData.phoneNumber,
//       email: bookingData.email,
//       address: bookingData.address,
//       busId: bookingData.busId,
//       selectedSeats: bookingData.selectedSeats,
//       discountAmount: bookingData.discountAmount,
//       GST: bookingData.GST,
//       cartTotal: bookingData.cartTotal,
//       createdAt: bookingData.createdAt,
//       updatedAt: bookingData.updatedAt
//     }, { transaction });

//     // Create passenger records associated with the booking
//     const passengerDetails = bookingData.passengerDetails;
//     const passengerRecords = passengerDetails.map(passenger => ({
//       bookingId: booking.id,
//       name: passenger.name,
//       age: passenger.age,
//       gender: passenger.gender
//     }));

//     await Passenger.bulkCreate(passengerRecords, { transaction });

//     // Commit the transaction
//     await transaction.commit();

//     // Return success response
//     res.status(201).json({ message: 'Booking created successfully', bookingId: booking.id });
//   } catch (error) {
//     // Rollback the transaction in case of an error
//     await transaction.rollback();

//     console.error('Error:', error);
//     res.status(500).json({ message: 'Failed to create booking. Please try again.' });
//   }
// };

// const getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.findAll({
//       include: [{ model: Passenger, as: 'passengers' }]
//     });
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Failed to fetch bookings. Please try again.' });
//   }
// };
// const getBookingById = async (req, res) => {
//   const bookingId = req.params.id;
//   try {
//     const booking = await Booking.findByPk(bookingId, {
//       include: [{ model: Passenger, as: 'passengers' }]
//     });
//     if (!booking) {
//       return res.status(404).json({ message: 'Booking not found.' });
//     }
//     res.status(200).json(booking);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Failed to fetch booking. Please try again.' });
//   }
// };

// module.exports = {
//   createBooking,
//   getAllBookings,
//   getBookingById,
//   // cancelBookingById
  
// };


const { Booking } = require('../db/bookingModel'); 
const { Passenger } = require('../db/passenger'); 
const { sequelize } = require('../db/dbConnectionsModel'); 

const createBooking = async (req, res) => {
  const bookingData = req.body; 
  const transaction = await sequelize.transaction();

  try {
    console.log(bookingData.busId)
console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    const booking = await Booking.create({
      customerName: bookingData.customerName,
      phoneNumber: bookingData.phoneNumber,
      email: bookingData.email,
      address: bookingData.address,
      busId: bookingData.busId,
      selectedSeats: bookingData.selectedSeats,
      discountAmount: bookingData.discountAmount,
      GST: bookingData.GST,
      cartTotal: bookingData.cartTotal,
      createdAt: bookingData.createdAt,
      updatedAt: bookingData.updatedAt,
      status: 'pending',
    }, { transaction });

    // Create passenger records associated with the booking
    const passengerDetails = bookingData.passengerDetails;
    const passengerRecords = passengerDetails.map(passenger => ({
      bookingId: booking.id,
      name: passenger.name,
      age: passenger.age,
      gender: passenger.gender
    }));

    await Passenger.bulkCreate(passengerRecords, { transaction });
    await transaction.commit();
    res.status(201).json({ message: 'Booking created successfully', bookingId: booking.id });
  } catch (error) {
    await transaction.rollback();

    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to create booking. Please try again.' });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [{ model: Passenger, as: 'passengers' }]
    });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to fetch bookings. Please try again.' });
  }
};
const getBookingById = async (req, res) => {
  const bookingId = req.params.id;
  try {
    const booking = await Booking.findByPk(bookingId, {
      include: [{ model: Passenger, as: 'passengers' }]
    });
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found.' });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to fetch booking. Please try again.' });
  }
};

const confirmBooking = async (req, res) => {
  const bookingId = req.params.id;

  try {
    const booking = await Booking.findByPk(bookingId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found.' });
    }

    if (booking.status !== 'pending') {
      return res.status(400).json({ message: 'Booking cannot be confirmed.' });
    }

    booking.status = 'confirmed';
    await booking.save();

    res.status(200).json({ message: 'Booking confirmed successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to confirm booking. Please try again.' });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  getBookingById,
  confirmBooking,
  // holdSeats,
  // cancelBookingById
  
};
