// const cron = require('node-cron');
// const { Booking } = require('../db/bookingModel'); // Adjust the path as necessary
// const { Op } = require('sequelize');
// const { sequelize } = require('../db/dbConnectionsModel'); // Adjust the path as necessary

// // Define the cron job to run every minute
// cron.schedule('* * * * *', async () => {
//   console.log('Running seat hold expiration check...');

//   try {
//     const expirationTime = new Date(Date.now() - 2 * 60 * 1000); // 2 minutes ago

//     // Find bookings where the status is 'pending' and the hold time is older than 2 minutes
//     const expiredBookings = await Booking.findAll({
//       where: {
//         status: 'pending',
//         createdAt: {
//           [Op.lt]: expirationTime
//         }
//       }
//     });

//     for (const booking of expiredBookings) {
//       // Update the status of expired bookings to 'available' and remove the hold on the seats
//       await booking.update({
//         status: 'available',
//         selectedSeats: [],
//         updatedAt: new Date()
//       });
//       console.log(`Booking ID ${booking.id} expired and seats are now available.`);
//     }
//   } catch (error) {
//     console.error('Error checking seat hold expiration:', error);
//   }
// });

// console.log('Seat hold expiration scheduler initialized.');
