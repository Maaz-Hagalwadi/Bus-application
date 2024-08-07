

// // Payment.jsx
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import axios from 'axios';

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails } = location.state || {};

//   const {
//     selectedSeats,
//     bus,
//     numPassengers,
//     discountAmount=0,
//     GST=0,
//     cartTotal=0,
//     from,
//     to,
//     fare=0,
//     bookingDate,
//   } = bookingDetails || {};

//   const [passengerDetails, setPassengerDetails] = useState(
//     Array.from({ length: numPassengers || 0 }, () => ({ name: '', age: '', gender: '' }))
//   );
//   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');

//   const handlePassengerChange = (index, field, value) => {
//     const updatedDetails = passengerDetails.map((passenger, i) =>
//       i === index ? { ...passenger, [field]: value } : passenger
//     );
//     setPassengerDetails(updatedDetails);
//   };



//   const validatePassengerDetails = () => {
//     for (const passenger of passengerDetails) {
//       if (!passenger.name || !passenger.age || !passenger.gender) {
//         return false;
//       }
//     }
//     return true;
//   };
//   const genders = passengerDetails.map(passenger => passenger.gender);
//   const handlePayment = async () => {

//     try {
//       return await axios.post("http://localhost:3000/booking", {
//         customerName: "",
//         phoneNumber: "",
//         email: "",
//         address: "",
//         busId: bus.busId,
//         selectedSeats: selectedSeats,
//         discountAmount: discountAmount,
//         gst: "",
//         cartTotal: cartTotal,
//         createdAt: "",
//         updatedAt: "",
//         passengerDetails: passengerDetails

//       }, {
//         header: { "Content-type": "application/json" }
//       }).then((res) => {
//         return axios.post("http://localhost:3000/seat", {
//           busId: bus.busId,
//           from: from,
//           to: to,
//           selectedSeats: selectedSeats,
//           bookingDate: bookingDate,
//           gender: genders,
//         }, {
//           header: { "Content-type": "application/json" }
//         })
//       }).catch((rej) => {
//         console.log(rej)
//       })


//     }
//     catch (err) {
//       console.log(err);
//       return true;
//     }


//   };

//   const handleConfirmBooking = () => {
//     if (!validatePassengerDetails()) {
//       Swal.fire({
//         title: "Validation Error",
//         text: "Please fill in all passenger details.",
//         icon: "error"
//       });
//       return;
//     }

//     navigate('/paymentmodal', { 
//       state: { 
//         bookingDetails, 
//         customerDetails: { ...customerDetails, email: customerEmail }, 
//         passengerDetails 
//       }
//     });
//   };
  
//   const formatCurrency = (amount) => {
//     return amount ? `₹ ${amount.toLocaleString()}` : '₹ 0';
//   };
  
//   return (
//     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
//       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
//         Booking Confirmation
//       </h2>

//       {customerDetails && (
//         <div className="mb-4">
//           <h4>Customer Details:</h4>
//           <p><strong>Name:</strong> {customerDetails.name}</p>
//           <p><strong>Phone Number:</strong> {customerDetails.phoneNumber}</p>
//           <p><strong>Email:</strong> 
//             <input
//               type="email"
//               value={customerEmail}
//               onChange={(e) => setCustomerEmail(e.target.value)}
//               style={{ width: '100%', marginBottom: '10px' }}
//             />
//           </p>
//           <p><strong>Address:</strong> {customerDetails.address}</p>
//         </div>
//       )}

//       {bus && (
//         <div className="mb-4" style={{ background: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
//           <h4 style={{ color: 'grey', fontWeight: 'bold' }}>Bus Details</h4>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Bus Name</label>
//             <div className="col-sm-8">
//               <p>{bus.busName}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Vehicle Number</label>
//             <div className="col-sm-8">
//               <p>{bus.busNumber}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Source</label>
//             <div className="col-sm-8">
//               <p>{from}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Destination</label>
//             <div className="col-sm-8">
//               <p>{to}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Type</label>
//             <div className="col-sm-8">
//               <p>{bus.busType}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Boarding time</label>
//             <div className="col-sm-8">
//               <p>{bus.Route?.departure}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Drop-off time</label>
//             <div className="col-sm-8">
//               <p>{bus.Route?.arrival}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Fare</label>
//             <div className="col-sm-8">
//               <p>₹ {fare.toLocaleString()}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Selected Seats</label>
//             <div className="col-sm-8">
//               <p>{selectedSeats.map((seat) => seat ).join(', ')}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Number of Passengers</label>
//             <div className="col-sm-8">
//               <p>{numPassengers}</p>
//             </div>
//           </div>
//           <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
//             <label className="col-sm-4 col-form-label">Journey Date</label>
//             <div className="col-sm-8">
//               <p>{new Date(bookingDate).toLocaleDateString()}</p>
//             </div>
//           </div>
//           {/* {Object.entries({
//             'Bus Name': bus.busName,
//             'Vehicle Number': bus.busNumber,
//             'Source': from,
//             'Destination': to,
//             'Type': bus.busType,
//             'Boarding time': bus.Route?.BoardingTime || 'N/A',
//             'Fare': `₹ ${fare.toLocaleString()}`,
//             'Selected Seats': selectedSeats.join(', '),
//             'Booking Date': new Date(bookingDate).toLocaleDateString(),
//           }).map(([label, value]) => (
//             <p key={label}><strong>{label}:</strong> {value}</p>
//           ))} */}
//         </div>
//       )}


// <div className="mb-4" style={{ textAlign: 'center' }}>
//         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Passenger Details:</h4>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="mb-3">
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="Name"
//               value={passenger.name}
//               onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               required
//               style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
//             />
//             <input
//               type="text"
//               className="form-control mb-2"
//               placeholder="Age"
//               value={passenger.age}
//               onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               required
//               style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
//             />
//             <input

//               type="text"
//               className="form-control mb-2"
//               placeholder="Gender"
//               value={passenger.gender}
//               onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               required
//               style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* <div className="mb-4" style={{ textAlign: 'center' }}>
//         <h4>Passenger Details:</h4>
//         {passengerDetails.map((passenger, index) => (
//           <div key={index} className="mb-3">
//             <h5>Passenger {index + 1}</h5>
//             <input
//               type="text"
//               placeholder="Name"
//               value={passenger.name}
//               onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
//               style={{ width: '100%', marginBottom: '10px' }}
//             />
//             <input
//               type="text"
//               placeholder="Age"
//               value={passenger.age}
//               onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
//               style={{ width: '100%', marginBottom: '10px' }}
//             />
//             <select
//               value={passenger.gender}
//               onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
//               style={{ width: '100%', marginBottom: '10px' }}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>
//         ))}
//       </div> */}

//       {/* <button
//         className="btn btn-primary"
//         onClick={handleConfirmBooking}
//         style={{ padding: '10px', backgroundColor: '#ca5252', borderColor: '#ca5252' }}
//       >
//         Confirm Booking
//       </button> */}

// <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '4px', backgroundColor: '#f9f9f9' }}>
//         <h4>Price Summary:</h4>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
//           <span>Base Fare:</span>
//           <span>{formatCurrency(fare)}</span>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
//           <span>Discount:</span>
//           <span>{formatCurrency(discountAmount)}</span>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
//           <span>GST:</span>
//           <span>{formatCurrency(GST)}</span>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
//           <span>Total:</span>
//           <span>{formatCurrency(cartTotal)}</span>
//         </div>
//       </div>
// <div className="text-center">
// <button className="btn btn-primary" onClick={handleConfirmBooking}  style={{ backgroundColor: '#ca5252', border: 'none', padding: '10px 20px', borderRadius: '4px', color: '#fff' }}>

//             Confirm Booking
//           </button>
//           <button className="btn btn-outline-secondary" style={{ margin: '10px', backgroundColor: '#fff', border: '2px solid #ca5252', color: '#ca5252', padding: '10px 20px', borderRadius: '4px' }} 
//          onClick={() => navigate('/')}>
//             Cancel
//           </button>
//           </div>
//     </div>
//   );
// };

// export default Payment;
// Payment.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails, customerDetails } = location.state || {};

  const {
    selectedSeats,
    bus,
    numPassengers,
    discountAmount=0,
    GST=0,
    cartTotal=0,
    from,
    to,
    fare=0,
    bookingDate,
  } = bookingDetails || {};

  const [passengerDetails, setPassengerDetails] = useState(
    Array.from({ length: numPassengers || 0 }, () => ({ name: '', age: '', gender: '' }))
  );
  const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');

  const handlePassengerChange = (index, field, value) => {
    const updatedDetails = passengerDetails.map((passenger, i) =>
      i === index ? { ...passenger, [field]: value } : passenger
    );
    setPassengerDetails(updatedDetails);
  };

  const validatePassengerDetails = () => {
    for (const passenger of passengerDetails) {
      if (!passenger.name || !passenger.age || !passenger.gender) {
        return false;
      }
    }
    return true;
  };

  const genders = passengerDetails.map(passenger => passenger.gender);

  const handlePayment = async () => {
    try {
      await axios.post("http://localhost:3000/booking", {
        customerName: "",
        phoneNumber: "",
        email: "",
        address: "",
        busId: bus.busId,
        selectedSeats: selectedSeats,
        discountAmount: discountAmount,
        gst: "",
        cartTotal: cartTotal,
        createdAt: "",
        updatedAt: "",
        passengerDetails: passengerDetails
      }, {
        headers: { "Content-type": "application/json" }
      });

      await axios.post("http://localhost:3000/seat", {
        busId: bus.busId,
        from: from,
        to: to,
        selectedSeats: selectedSeats,
        bookingDate: bookingDate,
        gender: genders,
      }, {
        headers: { "Content-type": "application/json" }
      });

    } catch (err) {
      console.log(err);
    }
  };

  const handleConfirmBooking = () => {
    if (!validatePassengerDetails()) {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all passenger details.",
        icon: "error"
      });
      return;
    }

    navigate('/paymentmodal', { 
      state: { 
        bookingDetails, 
        customerDetails: { ...customerDetails, email: customerEmail }, 
        passengerDetails 
      }
    });
  };

  const formatCurrency = (amount) => {
    return amount ? `₹ ${amount.toLocaleString()}` : '₹ 0';
  };

  return (
    <div className="container" style={{ maxWidth: '1200px', margin: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Booking Confirmation Section */}
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
            Booking Confirmation
          </h2>

          {customerDetails && (
            <div className="mb-4">
              <h4>Customer Details:</h4>
              <p><strong>Name:</strong> {customerDetails.name}</p>
              <p><strong>Phone Number:</strong> {customerDetails.phoneNumber}</p>
              <p><strong>Email:</strong> 
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  style={{ width: '100%', marginBottom: '10px' }}
                />
              </p>
              <p><strong>Address:</strong> {customerDetails.address}</p>
            </div>
          )}

          {bus && (
            <div className="mb-4" style={{ background: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
              <h4 style={{ color: 'grey', fontWeight: 'bold' }}>Bus Details</h4>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Bus Name</label>
                <div className="col-sm-8">
                  <p>{bus.busName}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Vehicle Number</label>
                <div className="col-sm-8">
                  <p>{bus.busNumber}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Source</label>
                <div className="col-sm-8">
                  <p>{from}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Destination</label>
                <div className="col-sm-8">
                  <p>{to}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Type</label>
                <div className="col-sm-8">
                  <p>{bus.busType}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Boarding time</label>
                <div className="col-sm-8">
                  <p>{bus.Route?.departure}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Drop-off time</label>
                <div className="col-sm-8">
                  <p>{bus.Route?.arrival}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Fare</label>
                <div className="col-sm-8">
                  <p>₹ {fare.toLocaleString()}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Selected Seats</label>
                <div className="col-sm-8">
                  <p>{selectedSeats.map((seat) => seat ).join(', ')}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Number of Passengers</label>
                <div className="col-sm-8">
                  <p>{numPassengers}</p>
                </div>
              </div>
              <div className="row mb-3" style={{ color: 'grey', fontWeight: 'bold' }}>
                <label className="col-sm-4 col-form-label">Journey Date</label>
                <div className="col-sm-8">
                  <p>{new Date(bookingDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-4" style={{ textAlign: 'center' }}>
            <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Passenger Details:</h4>
            {passengerDetails.map((passenger, index) => (
              <div key={index} className="mb-3">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Name"
                  value={passenger.name}
                  onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                  required
                  style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Age"
                  value={passenger.age}
                  onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                  required
                  style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
                />
                <select
                  className="form-control"
                  value={passenger.gender}
                  onChange={(e) => handlePassengerChange(index, 'gender', e.target.value)}
                  required
                  style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            ))}
          </div>

          
        </div>

        {/* Payment Summary Section */}
        <div style={{ flex: 1 }}>
          <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
            Payment Summary
          </h2>
          <div className="payment-summary" style={{ background: '#f2f2f2', padding: '20px', borderRadius: '8px' }}>
            <div className="mb-3">
              <h5 style={{ color: 'grey', fontWeight: 'bold' }}>Total Fare</h5>
              <p>{formatCurrency(cartTotal)}</p>
            </div>
            <div className="mb-3">
              <h5 style={{ color: 'grey', fontWeight: 'bold' }}>Discount</h5>
              <p>{formatCurrency(discountAmount)}</p>
            </div>
            <div className="mb-3">
              <h5 style={{ color: 'grey', fontWeight: 'bold' }}>GST</h5>
              <p>{formatCurrency(GST)}</p>
            </div>
            <div className="mb-3" style={{ borderTop: '2px solid #ca5252', paddingTop: '10px' }}>
              <h5 style={{ color: '#ca5252', fontWeight: 'bold' }}>Total Amount</h5>
              <p>{formatCurrency(cartTotal - discountAmount + GST)}</p>
            </div>
            <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={handleConfirmBooking}
              style={{ backgroundColor: '#ca5252', border: 'none' }}
            >
              Confirm Booking
            </button>
          </div>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Payment;
