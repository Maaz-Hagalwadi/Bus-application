// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons'; 

// const API_URL = 'http://localhost:3000';

// const Info = () => {
//   const location = useLocation();
//   const { busId, from, to, fare, date } = location.state || {};
//   const navigate = useNavigate();
//   const [bus, setBus] = useState(null);
//   const [numPassengers, setNumPassengers] = useState(1);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [seatDetails, setSeatDetails] = useState([]);
//   const [availableSeats, setAvailableSeats] = useState(0);

//   useEffect(() => {
//     if (busId) {
//       fetchBusDetails(busId);
//     }
//   }, [busId]);

//   useEffect(() => {
//     setNumPassengers(selectedSeats.length);
//   }, [selectedSeats]);

//   const fetchBusDetails = async (busId) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const [busResponse, seatResponse] = await Promise.all([
//         axios.get(`${API_URL}/bus/${busId}`),
//         axios.get(`${API_URL}/seat/seats/${busId}`),
//       ]);
//       setBus(busResponse.data);
//       console.log(bus)
//       setSeatDetails(seatResponse.data || []);
//       console.log(seatDetails)
//     } catch (error) {
//       setError('Error fetching bus details. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };


// const checkSeatAvailability = (seat) => {
//   if (!seatDetails || seatDetails.length === 0) {
//     return true;
//   }


// const currentRouteFrom = from;
// const currentRouteTo = to;
 
// const isBlocked = seatDetails.some((seatDetail) => {
//   const seatBookedFrom = seatDetail.from;
//   const seatBookedTo = seatDetail.to;
 
 
//   const isOverlapping =
//     (seatBookedFrom < currentRouteTo && seatBookedTo > currentRouteFrom) ||
//     (seatBookedFrom >= currentRouteFrom && seatBookedTo <= currentRouteTo) || 
//     (seatBookedFrom <= currentRouteFrom && seatBookedTo >= currentRouteTo) || 
//     (seatBookedFrom > currentRouteFrom && seatBookedFrom < currentRouteTo) || 
//     (seatBookedTo > currentRouteFrom || seatBookedTo < currentRouteTo); 
 
//   return (
//     isOverlapping &&
//     seatDetail.selectedSeats &&
//     seatDetail.selectedSeats.includes(seat.toString()) &&
//     new Date(seatDetail.bookingDate).toLocaleDateString() === new Date(date).toLocaleDateString()
//   );
// });
 
// const isBoundaryCase = seatDetails.some((seatDetail) => {
//   const seatBookedFrom = seatDetail.from;
//   const seatBookedTo = seatDetail.to;
 
//   return (
//     (seatBookedTo === currentRouteFrom || seatBookedFrom === currentRouteTo) &&
//     seatDetail.selectedSeats &&
//     seatDetail.selectedSeats.includes(seat.toString()) &&
//     new Date(seatDetail.bookingDate).toLocaleDateString() === new Date(date).toLocaleDateString()
//   );
// });
 
// return !isBlocked || isBoundaryCase;
//   };

  
//   const handleSeatSelection = async (seat) => {
//     if (checkSeatAvailability(seat)) {
//       const isSeatSelected = selectedSeats.includes(seat);
//       const newSelectedSeats = isSeatSelected
//         ? selectedSeats.filter((s) => s !== seat)
//         : [...selectedSeats, seat];
//       setSelectedSeats(newSelectedSeats);
  
//       const seatData = {
//         busId: bus?.busId || 'N/A',
//         from,
//         to,
//         selectedSeats: Array.isArray(newSelectedSeats) ? newSelectedSeats : [],
//         bookingDate: date || 'N/A',
//         gender: ['Male'],
//       };
  
//       console.log('Seat Data to be posted:', seatData);
  
//       try {
//         const response = await fetch('http://localhost:3000/seat', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(seatData),
//         });
  
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         const result = await response.json();
//         console.log('Booking successful:', result);
//       } catch (error) {
//         console.error('Error posting seat selection:', error);
//       }
  
//       setAvailableSeats((prevAvailableSeats) =>
//         isSeatSelected ? prevAvailableSeats + 1 : prevAvailableSeats - 1
//       );
//     } else {
//       alert("This seat is already booked for the selected journey.");
//     }
//   };
  

// const cartSubtotal = selectedSeats.length * fare || 0;
// const cartTotalBeforeGST = cartSubtotal;
// const GST = cartTotalBeforeGST * 0.05;
// const cartTotal = cartTotalBeforeGST + GST;



//   const handleBooking = () => {
//     const bookingDetails = {
//       selectedSeats,
//       bus,
//       numPassengers,
//       from,
//       to,
//       fare,

//       bookingDate: date,
//       cartSubtotal,
//     GST,
//     cartTotal,
      
//     };
//     navigate('/billing', { state: { bookingDetails } });
//   };

//   if (isLoading) {
//     return <div className="container">Loading...</div>;
//   }

//   if (error) {
//     return <div className="container alert alert-danger">{error}</div>;
//   }

//   if (!bus) {
//     return <div>No bus details available</div>;
//   }
//   const seatButtonStyle = {
//     width: '80px', // Set the desired width
//     height: '50px', // Set the desired height
//     borderColor: '#ca5252', 
//     color: '#ca5252', 
//     position: 'relative'
//   };
  

  
//   const upperHalfCapacity = Math.ceil(bus.capacity / 2);
//   const lowerHalfCapacity = bus.capacity - upperHalfCapacity;
//   const upperBerthRows = 3; 
//   const lowerBerthRows = 3;

//   const seatsPerUpperRow = Math.ceil(upperHalfCapacity / upperBerthRows);
//   const seatsPerLowerRow = Math.ceil(lowerHalfCapacity / lowerBerthRows);

//   return (
//     <div className="container" style={{ backgroundColor: 'white', color: '#333', padding: '20px', borderRadius: '10px' }}>
//       <div className="row">
//         <div className="col-md-6">
//           {/* Seat Selection Section */}
//           <div className="mb-4 mt-4" style={{ border: '1px solid #ca5252', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
//             <h5 style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold',fontSize:'25px' }}>Select Seats</h5>

//             <div className="d-flex justify-content mb-4" style={{marginTop:'30px'}}>
//   <div className="d-flex flex-column align-items-center mx-3">
//     <button className="btn btn-outline-primary" style={{ borderColor: '#ca5252', color: '#ca5252', marginBottom: '5px' }}>Seat</button>
//     <span>Available</span>
//   </div>
//   <div className="d-flex flex-column align-items-center mx-3">
//     <button className="btn btn-danger" style={{ marginBottom: '5px' }} disabled>Seat</button>
//     <span>Booked</span>
//   </div>
//   <div className="d-flex flex-column align-items-center mx-3">
//     <button className="btn btn-success" style={{ marginBottom: '5px' }}>Seat</button>
//     <span>Selected</span>
//   </div>
// </div>

//             {/* upper Berth Seats */}
//             <div className="mb-3">
//               <h6 style={{ color: 'black', fontWeight: 'bold' }}>Upper Berth</h6>
//               <div className="seat-selection">
//                 {[...Array(upperBerthRows)].map((row, rowIndex) => (
//                   <div key={rowIndex} className="mb-2" style={rowIndex===2 ?{marginTop:'30px'}:{}}>
//                     {[...Array(seatsPerUpperRow)].map((seat, seatIndex) => {
//                       const seatNumber = (rowIndex * seatsPerUpperRow + seatIndex + 1).toString().padStart(2, '0');
//                       return (
//                         <button
//                           key={seatNumber}
//                           className={`btn m-1 ${!checkSeatAvailability(seatNumber)
//                               ? 'btn-danger'
//                               : selectedSeats.includes(seatNumber)
//                                 ? 'btn-success'
//                                 : 'btn-outline-primary'
//                             }`}
//                           // style={{ borderColor: '#ca5252', color: '#ca5252', position: 'relative' }}
//                           style={seatButtonStyle}
//                           disabled={!checkSeatAvailability(seatNumber)}
//                           onClick={() => handleSeatSelection(seatNumber)}
//                         >
//                           UB{seatNumber}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* lower Berth Seats */}
//             <div className="mb-3">
//               <h6 style={{ color: 'black', fontWeight: 'bold' }}>Lower Berth</h6>
//               <div className="seat-selection">
//                 {[...Array(lowerBerthRows)].map((row, rowIndex) => (
//                   <div key={rowIndex} className="mb-2" style={rowIndex===2 ?{marginTop:'30px'}:{}}>
//                     {[...Array(seatsPerLowerRow)].map((seat, seatIndex) => {
//                       const seatNumber = rowIndex * seatsPerLowerRow + seatIndex + 1 + lowerHalfCapacity;
//                       return (
//                         <button
//                           key={seatNumber}
//                           className={`btn m-1 ${!checkSeatAvailability(seatNumber)
//                               ? 'btn-danger'
//                               : selectedSeats.includes(seatNumber)
//                                 ? 'btn-success'
//                                 : 'btn-outline-primary'
//                             }`}
//                           // style={{ borderColor: '#ca5252', color: '#ca5252', position: 'relative' }}
//                           style={seatButtonStyle}
//                           disabled={!checkSeatAvailability(seatNumber)}
//                           onClick={() => handleSeatSelection(seatNumber)}
//                         >
//                           LB{seatNumber}
                          
//                         </button>
//                       );
//                     })}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           {/* Selected Seats Summary */}
//           {selectedSeats.length > 0 && (
//             <div className="card mb-4" style={{ border: '1px solid #ca5252', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
//               <div className="card-body">
//                 <h5 className="card-title" style={{ color: '#ca5252', fontWeight: 'bold' }}>Selected Seats</h5>
//                 <ul className="list-group list-group-flush">
//                   {selectedSeats.map((seat) => (
//                     <li key={seat} className="list-group-item d-flex justify-content-between align-items-center">
//                       Seat {seat}
//                       <span className="badge badge-primary badge-pill">1</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="mt-3">
//                   <h5 style={{ color: '#ca5252', fontWeight: 'bold' }}>Total: {cartSubtotal} INR</h5>
//                 </div>
//               </div>
//             </div>
//           )}
// {/* 

// <div className="mb-4">
//       <h4>Enter Email for PDF:</h4>
//       <input
//         type="email"
//         className="form-control"
//         value={customerEmail}
//         onChange={(e) => setCustomerEmail(e.target.value)}
//         placeholder="Enter Email"
//       />
//     </div> */}



//           {/* From and To Details Section */}
//           <div style={{ border: '1px solid white', padding: '20px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
//             <div style={{ marginBottom: '10px' }}>
//               <h5 style={{ color: '#ca5252', textAlign: 'center', fontWeight: 'bold', fontSize: '29px' }}>Journey details</h5>
//               <h5 style={{ color: 'grey', fontWeight: 'bold', textAlign: 'center' }}> {from}({bus.Route?.departure})
//                 ----------------- {to}({bus.Route?.arrival})</h5>
//             </div>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item d-flex justify-content-between align-items-center" style={{ color: '#ca5252' }}>
//                 Fare details
//                 <span>{fare} INR</span>
//               </li>
//               <li className="list-group-item d-flex justify-content-between align-items-center" style={{ color: '#ca5252' }}>
//                 Available Seats
//                 <span>{bus.capacity - numPassengers}</span>
//               </li>
//               <li className="list-group-item d-flex justify-content-between align-items-center" style={{ color: '#ca5252' }}>
//                 No of Passengers
//                 <span>{numPassengers} </span>
//               </li>
//               <li className="list-group-item d-flex justify-content-between align-items-center" style={{ color: '#ca5252' }}>
//                 Bus Type
//                 <span>{bus.busType} </span>
//               </li>
//               <li className="list-group-item d-flex justify-content-between align-items-center" style={{ color: '#ca5252' }}>
//                 Departure date
//                 <span>{new Date(date).toLocaleDateString()}</span>
//               </li>
//             </ul>
//           </div>

          
//         </div>
//       </div>

//       {/* Booking Button */}
//       <div className="row mt-4">
//         <div className="col-md-6 offset-md-3">
//           <button
//             className="btn btn-lg btn-block btn-primary"
//             onClick={handleBooking}
//             disabled={selectedSeats.length === 0}
//             style={{ backgroundColor: '#ca5252', borderColor: '#ca5252' }}
//           >
//             Book Seats
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 

const API_URL = 'http://localhost:3000';

const Info = () => {
  const location = useLocation();
  const { busId, from, to, fare, date } = location.state || {};
  const navigate = useNavigate();
  const [bus, setBus] = useState(null);
  const [numPassengers, setNumPassengers] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [seatDetails, setSeatDetails] = useState([]);
  const [availableSeats, setAvailableSeats] = useState(0);

  useEffect(() => {
    if (busId) {
      fetchBusDetails(busId);
    }
  }, [busId]);

  useEffect(() => {
    setNumPassengers(selectedSeats.length);
  }, [selectedSeats]);

  const fetchBusDetails = async (busId) => {
    setIsLoading(true);
    setError(null);
    try {
      const [busResponse, seatResponse] = await Promise.all([
        axios.get(`${API_URL}/bus/${busId}`),
        axios.get(`${API_URL}/seat/seats/${busId}`),
      ]);
      setBus(busResponse.data);
      console.log(bus)
      setSeatDetails(seatResponse.data || []);
      console.log(seatDetails)
    } catch (error) {
      setError('Error fetching bus details. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


const checkSeatAvailability = (seat) => {
  if (!seatDetails || seatDetails.length === 0) {
    return true;
  }


const currentRouteFrom = from;
const currentRouteTo = to;
 
const isBlocked = seatDetails.some((seatDetail) => {
  const seatBookedFrom = seatDetail.from;
  const seatBookedTo = seatDetail.to;
 
 
  const isOverlapping =
    (seatBookedFrom < currentRouteTo && seatBookedTo > currentRouteFrom) ||
    (seatBookedFrom >= currentRouteFrom && seatBookedTo <= currentRouteTo) || 
    (seatBookedFrom <= currentRouteFrom && seatBookedTo >= currentRouteTo) || 
    (seatBookedFrom > currentRouteFrom && seatBookedFrom < currentRouteTo) || 
    (seatBookedTo > currentRouteFrom || seatBookedTo < currentRouteTo); 
 
  return (
    isOverlapping &&
    seatDetail.selectedSeats &&
    seatDetail.selectedSeats.includes(seat.toString()) &&
    new Date(seatDetail.bookingDate).toLocaleDateString() === new Date(date).toLocaleDateString()
  );
});
 
const isBoundaryCase = seatDetails.some((seatDetail) => {
  const seatBookedFrom = seatDetail.from;
  const seatBookedTo = seatDetail.to;
 
  return (
    (seatBookedTo === currentRouteFrom || seatBookedFrom === currentRouteTo) &&
    seatDetail.selectedSeats &&
    seatDetail.selectedSeats.includes(seat.toString()) &&
    new Date(seatDetail.bookingDate).toLocaleDateString() === new Date(date).toLocaleDateString()
  );
});
 
return !isBlocked || isBoundaryCase;
  };

  
  const handleSeatSelection = async (seat) => {
    if (checkSeatAvailability(seat)) {
      const isSeatSelected = selectedSeats.includes(seat);
      const newSelectedSeats = isSeatSelected
        ? selectedSeats.filter((s) => s !== seat)
        : [...selectedSeats, seat];
      setSelectedSeats(newSelectedSeats);
  
      const seatData = {
        busId: bus?.busId || 'N/A',
        from,
        to,
        selectedSeats: Array.isArray(newSelectedSeats) ? newSelectedSeats : [],
        bookingDate: date || 'N/A',
        gender: ['Male'],
      };
  
      console.log('Seat Data to be posted:', seatData);
  
      try {
        const response = await fetch('http://localhost:3000/seat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(seatData),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        console.log('Booking successful:', result);
      } catch (error) {
        console.error('Error posting seat selection:', error);
      }
  
      setAvailableSeats((prevAvailableSeats) =>
        isSeatSelected ? prevAvailableSeats + 1 : prevAvailableSeats - 1
      );
    } else {
      alert("This seat is already booked for the selected journey.");
    }
  };
  

const cartSubtotal = selectedSeats.length * fare || 0;
const cartTotalBeforeGST = cartSubtotal;
const GST = cartTotalBeforeGST * 0.05;
const cartTotal = cartTotalBeforeGST + GST;

  const handleBooking = () => {
    const bookingDetails = {
      selectedSeats,
      bus,
      numPassengers,
      from,
      to,
      fare,

      bookingDate: date,
      cartSubtotal,
    GST,
    cartTotal,
      
    };
    navigate('/billing', { state: { bookingDetails } });
  };

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container alert alert-danger">{error}</div>;
  }

  if (!bus) {
    return <div>No bus details available</div>;
  }

  
  const upperHalfCapacity = Math.ceil(bus.capacity / 2);
  const lowerHalfCapacity = bus.capacity - upperHalfCapacity;
  const upperBerthRows = 3; 
  const lowerBerthRows = 3;

  const seatsPerUpperRow = Math.ceil(upperHalfCapacity / upperBerthRows);
  const seatsPerLowerRow = Math.ceil(lowerHalfCapacity / lowerBerthRows);

  const seatButtonStyle = {
        width: '80px', // Set the desired width
        height: '40px', // Set the desired height
        borderColor: '#ca5252', 
        color: '#ca5252', 
        position: 'relative'
      };

  return (
    <div className="container" style={{ backgroundColor: '#f0f0f0', color: '#333', padding: '20px', borderRadius: '10px' }}>
      <div className="row">
        <div className="col-md-6">
          {/* Seat Selection Section */}
          <div className="mb-4 mt-4" style={{ border: '1px solid #ca5252', padding: '20px', borderRadius: '10px', backgroundColor: '#f0f0f0' }}>
            <h5 style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold',fontSize:'25px' }}>Select Seats</h5>

            <div className="d-flex justify-content mb-4" style={{marginTop:'30px'}}>
  <div className="d-flex flex-column align-items-center mx-3">
    <button className="btn btn-outline-primary" style={{ borderColor: '#ca5252', color: '#ca5252', marginBottom: '5px' }}>Seat</button>
    <span>Available</span>
  </div>
  <div className="d-flex flex-column align-items-center mx-3">
    <button className="btn btn-danger" style={{ marginBottom: '5px' }} disabled>Seat</button>
    <span>Booked</span>
  </div>
  <div className="d-flex flex-column align-items-center mx-3">
    <button className="btn btn-success" style={{ marginBottom: '5px' }}>Seat</button>
    <span>Selected</span>
  </div>
</div>

            {/* upper Berth Seats */}
            <div className="mb-3">
              <h6 style={{ color: 'black', fontWeight: 'bold' }}>Upper Berth</h6>
              <div className="seat-selection">
                {[...Array(upperBerthRows)].map((row, rowIndex) => (
                  <div key={rowIndex} className="mb-2" style={rowIndex===2 ?{marginTop:'30px'}:{}}>
                    {[...Array(seatsPerUpperRow)].map((seat, seatIndex) => {
                      const seatNumber = (rowIndex * seatsPerUpperRow + seatIndex + 1).toString().padStart(2, '0');
                      return (
                        <button
                          key={seatNumber}
                          className={`btn m-1 ${!checkSeatAvailability(seatNumber)
                              ? 'btn-danger'
                              : selectedSeats.includes(seatNumber)
                                ? 'btn-success'
                                : 'btn-outline-primary'
                            }`}
                          // style={{ borderColor: '#ca5252', color: '#ca5252', position: 'relative' }}
                          style={seatButtonStyle}
                          disabled={!checkSeatAvailability(seatNumber)}
                          onClick={() => handleSeatSelection(seatNumber)}
                        >
                          UB{seatNumber}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* lower Berth Seats */}
            <div className="mb-3">
              <h6 style={{ color: 'black', fontWeight: 'bold' }}>Lower Berth</h6>
              <div className="seat-selection">
                {[...Array(lowerBerthRows)].map((row, rowIndex) => (
                  <div key={rowIndex} className="mb-2" style={rowIndex===2 ?{marginTop:'30px'}:{}}>
                    {[...Array(seatsPerLowerRow)].map((seat, seatIndex) => {
                      const seatNumber = rowIndex * seatsPerLowerRow + seatIndex + 1 + lowerHalfCapacity;
                      return (
                        <button
                          key={seatNumber}
                          className={`btn m-1 ${!checkSeatAvailability(seatNumber)
                              ? 'btn-danger'
                              : selectedSeats.includes(seatNumber)
                                ? 'btn-success'
                                : 'btn-outline-primary'
                            }`}
                          // style={{ borderColor: '#ca5252', color: '#ca5252', position: 'relative' }}
                          style={seatButtonStyle}
                          disabled={!checkSeatAvailability(seatNumber)}
                          onClick={() => handleSeatSelection(seatNumber)}
                        >
                          LB{seatNumber}
                          
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        

        <div className="col-md-6">
  {/* Selected Seats Summary */}
  {selectedSeats.length > 0 && (
    <div
      className="card mb-4"
      style={{
        border: '1px solid #e0e0e0',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h5
        className="card-title"
        style={{
          color: '#ca5252',
          fontWeight: 'bold',
          fontSize: '25px',
          marginBottom: '15px',
          textAlign: 'center',
        }}
      >
        Selected Seats
      </h5>
      <ul className="list-group list-group-flush" style={{ padding: '0' }}>
        {selectedSeats.map((seat) => (
          <li
            key={seat}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{
              color: '#ca5252',
              padding: '10px 15px',
              
            }}
          >
            Seat {seat}
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        ))}
      </ul>
      {/* Fare Calculation Section */}
      <div
        className="mt-4"
        style={{
        
          paddingTop: '20px',
          marginTop: '20px',
        }}
      >
        <h5 style={{ color: '#ca5252', fontWeight: 'bold', fontSize: '25px' }}>
          Fare Calculation
        </h5>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: '10px' }}
        >
          <span>Number of Passengers:</span>
          <span>{numPassengers}</span>
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: '10px' }}
        >
          <span>Cart Subtotal:</span>
          <span>₹{cartSubtotal.toFixed(2)}</span>
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: '10px' }}
        >
          <span>GST (5%):</span>
          <span>₹{GST.toFixed(2)}</span>
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
        >
          <h5 style={{ color: '#ca5252', fontWeight: 'bold' }}>
            Total Fare: ₹{cartTotal.toFixed(2)}
          </h5>
        </div>
      </div>
    </div>
  )}

  {/* From and To Details Section */}
  <div
    style={{
      border: '1px solid #e0e0e0',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div style={{ marginBottom: '15px' }}>
      <h5
        style={{
          color: '#ca5252',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '29px',
          margin: '0 0 10px',
        }}
      >
        Journey Details
      </h5>
      <h5
        style={{
          color: 'grey',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '18px',
          margin: '0',
        }}
      >
        {from} ({bus.Route?.departure}) &#8230;&#8230;&#8230;&#8230;&#8230;&#8230; {to} ({bus.Route?.arrival})
      </h5>
    </div>
    <ul className="list-group list-group-flush" style={{ padding: '0' }}>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={{
          color: '#ca5252',
          padding: '10px 15px',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        Fare Details
        <span style={{ fontWeight: 'bold' }}>{fare} INR</span>
      </li>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={{
          color: '#ca5252',
          padding: '10px 15px',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        Available Seats
        <span style={{ fontWeight: 'bold' }}>{bus.capacity - numPassengers}</span>
      </li>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={{
          color: '#ca5252',
          padding: '10px 15px',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        Bus Type
        <span style={{ fontWeight: 'bold' }}>{bus.busType}</span>
      </li>
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        style={{ color: '#ca5252', padding: '10px 15px' }}
      >
        Departure Date
        <span style={{ fontWeight: 'bold' }}>{new Date(date).toLocaleDateString()}</span>
      </li>
    </ul>
  </div>
</div>

      </div>

      {/* Booking Button */}
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <button
            className="btn btn-lg btn-block btn-primary"
            onClick={handleBooking}
            disabled={selectedSeats.length === 0}
            style={{ backgroundColor: '#ca5252', borderColor: '#ca5252' }}
          >
            Book Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;

