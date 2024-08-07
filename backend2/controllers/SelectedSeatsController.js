

const { SelectedSeats } = require('../db/SelectedSeats');
const { Sequelize, DataTypes, Op } = require('sequelize');
const cron = require('node-cron');

const createBooking = async (req, res) => {
  try {
    const { busId, from, to, selectedSeats, bookingDate, gender } = req.body;
    const defaultGender = gender || 'Male';
    const existingBooking = await SelectedSeats.findOne({
      where: {
        busId,
        selectedSeats: { [Op.contains]: selectedSeats },
        from,
        to,
      },
    });
    let booking;
    if (existingBooking) {
      booking = await existingBooking.update({
        bookingstatus: 'true',
        gender: gender || existingBooking.gender, 
      });
    } else {
      booking = await SelectedSeats.create({
        busId,
        from,
        to,
        selectedSeats,
        bookingDate,
        gender: gender || 'Male', 
        bookingstatus: 'false',
        // email
      });
    }
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

cron.schedule('*/1 * * * *', async () => { // Runs every minute
  const threeMinutesAgo  = new Date(Date.now() - 5 * 60 * 1000);
  try {
    const result = await SelectedSeats.destroy({
      where: {
        bookingstatus: 'false',
        createdAt: {
          [Op.lt]: threeMinutesAgo ,
        },
      },
    });
    if (result > 0) {
      console.log(`Deleted ${result} pending bookings older than 5 minutes.`);
    }
  } catch (error) {
    console.error('Error deleting old pending bookings:', error);
  }
});

const getBookingsByBusId = async (req, res) => {
  const { busId } = req.params;
  try {
    const bookings = await SelectedSeats.findAll({
      where: {
        busId: busId,
      },
    });
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings by busId:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};
const getSelectedSeatsByBusId = async (req, res) => {
  const { busId } = req.params;
  try {
    const selectedSeats = await SelectedSeats.findAll({
      where: { busId },
      attributes: ['from', 'to', 'selectedSeats', 'bookingDate','gender'],
    });
    res.status(200).json(selectedSeats);
  } catch (error) {
    console.error('Error fetching selected seats by busId:', error);
    res.status(500).json({ error: 'Failed to fetch selected seats' });
  }
};

const deleteBookingsByBusIdAndSelectedSeat = async (req, res) => {
  const { busId, selectedSeat } = req.params;
  console.log(`Attempting to delete booking with busId: ${busId} and selectedSeat: ${selectedSeat}`);
  try {
    const deletedRows = await SelectedSeats.destroy({
      where: {
        busId,
        selectedSeats: { [Op.contains]: [selectedSeat] }
      }
    });
    if (deletedRows === 0) {
      console.log(`No bookings found to delete for busId: ${busId} and selectedSeat: ${selectedSeat}`);
      return res.status(404).json({ message: 'No bookings found to delete' });
    }
    console.log(`Successfully deleted ${deletedRows} bookings for busId: ${busId} and selectedSeat: ${selectedSeat}`);
    res.status(200).json({ deletedRows });
  } catch (error) {
    console.error(`Error deleting bookings for busId ${busId} and selectedSeat ${selectedSeat}:`, error);
    res.status(500).json({ error: 'Failed to delete bookings' });
  }
};
const getAllBookings = async (req, res) => {
  try {
    const bookings = await SelectedSeats.findAll();
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    res.status(500).json({ error: 'Failed to fetch all bookings' });
  }
};
module.exports = {
  createBooking,
  getBookingsByBusId,
  getSelectedSeatsByBusId,
  deleteBookingsByBusIdAndSelectedSeat,
  getAllBookings
};