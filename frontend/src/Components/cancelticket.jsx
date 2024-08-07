

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Swal from 'sweetalert2';
// // import { Card, Button, Container, Alert } from 'react-bootstrap';

// // const BookingCard = ({ booking, onDelete }) => {
// //   const handleDelete = () => {
// //     onDelete(booking.busId, booking.selectedSeats);
// //     Swal.fire({
       
// //         icon: 'success',
// //         title: 'Booking deleted successfully!',
// //         showConfirmButton: false,
// //         timer: 1500,
// //         width: '25%'
// //       });
// //   };

// //   const cardStyle = {
// //     margin: '1rem',
// //     border: '1px solid #ddd',
// //     borderRadius: '0.5rem',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //     width: 'calc(25% - 2rem)', 
// //     height: '350px', 
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'space-between',
// //     overflow: 'hidden',
// //   };

// //   const titleStyle = {
// //     fontSize: '1.25rem',
// //     fontWeight: 'bold',
// //     color: '#ca5252',
// //     textAlign: 'center',
// //     margin: '1rem 0',
// //   };

// //   const textStyle = {
// //     marginBottom: '1rem',
// //     fontSize: '0.9rem',
// //     color: '#555',
// //     textAlign: 'center',
// //     // justifyContent:'center',
// //     padding: '2 2rem',
// //   };

// //   const buttonContainerStyle = {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     margin: '1rem',
// //   };

// //   return (
// //     <Card style={cardStyle}>
// //       <Card.Body>
// //         <Card.Title style={titleStyle}>Booking ID: {booking.id}</Card.Title>
// //         <Card.Text style={textStyle}>
// //           <strong>From:</strong> {booking.from}<br />
// //           <strong>To:</strong> {booking.to}<br />
// //           <strong>Selected Seats:</strong> {booking.selectedSeats.join(', ')}<br />
// //           <strong>Booking Date:</strong> {booking.bookingDate}<br />
// //           <strong>Gender:</strong> {booking.gender.join(', ')}
// //         </Card.Text>
// //         <div style={buttonContainerStyle}>
// //           <Button
// //             variant="danger"
// //             onClick={handleDelete}
// //             style={{ backgroundColor: '#ca5252', border: '2px solid black', margin: '2px', width: '64%' }}
// //           >
// //             Cancel Ticket
// //           </Button>
// //           <Button
// //             variant="danger"
// //             style={{ backgroundColor: '#ca5252', border: '2px solid black', margin: '2px', width: '64%' }}
// //           >
// //             Refund Policy
// //           </Button>
// //         </div>
// //       </Card.Body>
// //     </Card>
// //   );
// // };

// // const Bookings = () => {
// //   const [bookings, setBookings] = useState([]);
// //   const [showAlert, setShowAlert] = useState(false);

// //   useEffect(() => {
// //     fetchBookings();
// //   }, []);

// //   const fetchBookings = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:3000/seat');
// //       setBookings(response.data);
// //     } catch (error) {
// //       console.error('Error fetching bookings:', error);
// //     }
// //   };

// //   const deleteBooking = async (busId, selectedSeats) => {
// //     try {
// //       await axios.delete(`http://localhost:3000/seat/${busId}/${selectedSeats.join(',')}`);
// //       setBookings(bookings.filter(booking => !(booking.busId === busId && booking.selectedSeats === selectedSeats)));
// //       setShowAlert(true);
// //       setTimeout(() => setShowAlert(false), 3000);
// //     } catch (error) {
// //       console.error('Error deleting booking:', error);
// //     }
// //   };

// //   const containerStyle = {
// //     padding: '2rem',
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     justifyContent: 'space-between', // Align items with space between
// //   };

// //   const headerStyle = {
// //     marginBottom: '2rem',
// //     fontSize: '2rem',
// //     fontWeight: 'bold',
// //        color: '#ca5252',
    
// //   };

// //   return (
// //     <Container style={{containerStyle,textAlign:'center'}}>
// //       <h1 style={headerStyle}>All Bookings</h1>
// //       {/* {showAlert && <Alert variant="success">Booking deleted successfully!</Alert>} */}
// //       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
// //         {bookings.map(booking => (
// //           <BookingCard key={booking.id} booking={booking} onDelete={deleteBooking} />
// //         ))}
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Bookings;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { Card, Button, Container, Alert } from 'react-bootstrap';

// const BookingCard = ({ booking, onDelete }) => {
//   const handleDelete = () => {
//     onDelete(booking.busId, booking.selectedSeats);
//     Swal.fire({
//       icon: 'success',
//       title: 'Booking deleted successfully!',
//       showConfirmButton: false,
//       timer: 1500,
//       width: '25%'
//     });
//   };

//   const cardStyle = {
//     margin: '1rem',
//     border: '1px solid #ddd',
//     borderRadius: '0.5rem',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     width: 'calc(25% - 2rem)', 
//     height: '350px', 
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     overflow: 'hidden',
//   };

//   const titleStyle = {
//     fontSize: '1.25rem',
//     fontWeight: 'bold',
//     color: '#ca5252',
//     textAlign: 'center',
//     margin: '1rem 0',
//   };

//   const textStyle = {
//     marginBottom: '1rem',
//     fontSize: '0.9rem',
//     color: '#555',
//     textAlign: 'center',
//     padding: '2rem',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     margin: '1rem',
//   };

//   return (
//     <Card style={cardStyle}>
//       <Card.Body>
//         <Card.Title style={titleStyle}>Booking ID: {booking.id}</Card.Title>
//         <Card.Text style={textStyle}>
//           <strong>From:</strong> {booking.from}<br />
//           <strong>To:</strong> {booking.to}<br />
//           <strong>Selected Seats:</strong> {booking.selectedSeats.join(', ')}<br />
//           <strong>Booking Date:</strong> {booking.bookingDate}<br />
//           <strong>Gender:</strong> {booking.gender.join(', ')}
//         </Card.Text>
//         <div style={buttonContainerStyle}>
//           <Button
//             variant="danger"
//             onClick={handleDelete}
//             style={{ backgroundColor: '#ca5252', border: '2px solid black', margin: '2px', width: '64%' }}
//           >
//             Cancel Ticket
//           </Button>
//           <Button
//             variant="danger"
//             style={{ backgroundColor: '#ca5252', border: '2px solid black', margin: '2px', width: '64%' }}
//           >
//             Refund Policy
//           </Button>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get('http://localhost:3000/seat');
//       setBookings(response.data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//     }
//   };

//   const deleteBooking = async (busId, selectedSeats) => {
//     try {
//       await axios.delete(`http://localhost:3000/seat/${busId}/${selectedSeats.join(',')}`);
//       setBookings(bookings.filter(booking => {
//         return !(booking.busId === busId && selectedSeats.every(seat => booking.selectedSeats.includes(seat) && booking.selectedSeats.length === selectedSeats.length));
//       }));
//       setShowAlert(true);
//       setTimeout(() => setShowAlert(false), 3000);
//     } catch (error) {
//       console.error('Error deleting booking:', error);
//     }
//   };

//   const containerStyle = {
//     padding: '2rem',
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     textAlign: 'center',
//   };

//   const headerStyle = {
//     marginBottom: '2rem',
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#ca5252',
//   };

//   return (
//     <Container style={containerStyle}>
//       <h1 style={headerStyle}>All Bookings</h1>
//       {showAlert && <Alert variant="success">Booking deleted successfully!</Alert>}
//       <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
//         {bookings.map(booking => (
//           <BookingCard key={booking.id} booking={booking} onDelete={deleteBooking} />
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Bookings;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card, Button, Container, Alert } from 'react-bootstrap';

const BookingCard = ({ booking, onDelete }) => {
  const handleDelete = () => {
    onDelete(booking.busId, booking.selectedSeats);
    Swal.fire({
      icon: 'success',
      title: 'Booking deleted successfully!',
      showConfirmButton: false,
      timer: 1500,
      width: '25%',
    });
  };

  const cardStyle = {
    margin: '1rem',
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: 'calc(25% - 2rem)', 
    height: '350px', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#ca5252',
    textAlign: 'center',
    margin: '1rem 0',
  };

  const textStyle = {
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#555',
    textAlign: 'center',
    padding: '2rem',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem',
  };

  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Title style={titleStyle}>Booking ID: {booking.id}</Card.Title>
        <Card.Text style={textStyle}>
          <strong>From:</strong> {booking.from}<br />
          <strong>To:</strong> {booking.to}<br />
          <strong>Selected Seats:</strong> {booking.selectedSeats.join(', ')}<br />
          <strong>Booking Date:</strong> {booking.bookingDate}<br />
          <strong>Gender:</strong> {booking.gender.join(', ')}
        </Card.Text>
        <div style={buttonContainerStyle}>
          <Button
            variant="danger"
            onClick={handleDelete}
            style={{ backgroundColor: '#ca5252', border: '2px solid black', margin: '2px', width: '64%' }}
          >
            Cancel Ticket
          </Button>
          <Button
            variant="danger"
            style={{ backgroundColor: '#ca5252', border: '2px solid black', margin: '2px', width: '64%' }}
          >
            Refund Policy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/seat');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const deleteBooking = async (busId, selectedSeats) => {
    try {
      await axios.delete(`http://localhost:3000/seat/${busId}/${selectedSeats.join(',')}`);
      setBookings(prevBookings => prevBookings.filter(booking => 
        !(booking.busId === busId && selectedSeats.every(seat => booking.selectedSeats.includes(seat) && booking.selectedSeats.length === selectedSeats.length))
      ));
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  const containerStyle = {
    padding: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    textAlign: 'center',
  };

  const headerStyle = {
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#ca5252',
  };

  return (
    <Container style={containerStyle}>
      <h1 style={headerStyle}>All Bookings</h1>
      {showAlert && <Alert variant="success">Booking deleted successfully!</Alert>}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {bookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} onDelete={deleteBooking} />
        ))}
      </div>
    </Container>
  );
};

export default Bookings;

