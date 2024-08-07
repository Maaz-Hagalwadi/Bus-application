
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingDetails = ({ bookingId }) => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cancellationMessage, setCancellationMessage] = useState('');

  useEffect(() => {
    const fetchBookingDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/bookings/${bookingId}`);
        setBookingDetails(response.data); 
      } catch (error) {
        setError('Failed to fetch booking details.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookingDetails();
  }, [bookingId]);

  const cancelBooking = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:3000/api/bookings/${bookingId}/cancel`);
      if (response.status === 200) {
        setCancellationMessage('Booking successfully cancelled.');
      } else {
        setError('Failed to cancel booking.');
      }
    } catch (error) {
      setError('Failed to cancel booking.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>{error}</p>;
  if (!bookingDetails) return null;

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', backgroundColor: '#fff' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Booking Details</h2>
      <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Customer Name:</p>
        <p>{bookingDetails.customerName}</p>
      </div>
      <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Phone Number:</p>
        <p>{bookingDetails.phoneNumber}</p>
      </div>
      <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Email:</p>
        <p>{bookingDetails.email}</p>
      </div>
      <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '15px' }}>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Bus ID:</p>
        <p>{bookingDetails.busId}</p>
      </div>
      <div style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px', marginBottom: '20px' }}>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Selected Seats:</p>
        <p>{bookingDetails.selectedSeats.join(', ')}</p>
      </div>
      <button 
        onClick={cancelBooking} 
        disabled={loading} 
        style={{ backgroundColor: '#ff4d4d', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? 'Canceling...' : 'Cancel Booking'}
      </button>
      {cancellationMessage && <p style={{ marginTop: '20px', color: '#4CAF50' }}>{cancellationMessage}</p>}
    </div>
  );
};

export default BookingDetails;
