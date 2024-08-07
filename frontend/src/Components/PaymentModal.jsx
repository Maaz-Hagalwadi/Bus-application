// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { Modal, Button } from 'react-bootstrap';

// // // // // // // // const PaymentModal = ({ show, onClose, onGeneratePDF, bookingData, cartTotal = 0 }) => {
// // // // // // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // // // // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // // // // // //     cardNumber: '',
// // // // // // // //     cardHolder: '',
// // // // // // // //     expiryDate: '',
// // // // // // // //     cvv: '',
// // // // // // // //   });
// // // // // // // //   const [debitCardDetails, setDebitCardDetails] = useState({
// // // // // // // //     cardNumber: '',
// // // // // // // //     cardHolder: '',
// // // // // // // //     expiryDate: '',
// // // // // // // //     cvv: '',
// // // // // // // //   });
// // // // // // // //   const [netBankingDetails, setNetBankingDetails] = useState({
// // // // // // // //     bankName: '',
// // // // // // // //     accountNumber: '',
// // // // // // // //     ifscCode: '',
// // // // // // // //   });
// // // // // // // //   const [upiDetails, setUpiDetails] = useState({
// // // // // // // //     upiId: '',
// // // // // // // //   });

// // // // // // // //   const handleInputChange = (setter, field, value) => {
// // // // // // // //     setter(prevState => ({
// // // // // // // //       ...prevState,
// // // // // // // //       [field]: value,
// // // // // // // //     }));
// // // // // // // //   };

// // // // // // // //   const handlePayment = () => {
// // // // // // // //     // Implement payment processing logic here
// // // // // // // //     // Once payment is successful, generate the PDF invoice
// // // // // // // //     onGeneratePDF(bookingData);
// // // // // // // //     onClose();
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <Modal show={show} onHide={onClose} centered>
// // // // // // // //       <Modal.Header closeButton>
// // // // // // // //         <Modal.Title>Payment</Modal.Title>
// // // // // // // //       </Modal.Header>
// // // // // // // //       <Modal.Body>
// // // // // // // //         <h4>Total Amount: ₹ {cartTotal.toLocaleString()}</h4>
// // // // // // // //         <div className="form-group">
// // // // // // // //           <label htmlFor="payment-method">Select Payment Method:</label>
// // // // // // // //           <select
// // // // // // // //             id="payment-method"
// // // // // // // //             className="form-control"
// // // // // // // //             value={paymentMethod}
// // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // //           >
// // // // // // // //             <option value="">Select</option>
// // // // // // // //             <option value="credit-card">Credit Card</option>
// // // // // // // //             <option value="debit-card">Debit Card</option>
// // // // // // // //             <option value="net-banking">Net Banking</option>
// // // // // // // //             <option value="upi">UPI</option>
// // // // // // // //           </select>
// // // // // // // //         </div>

// // // // // // // //         {paymentMethod === 'credit-card' && (
// // // // // // // //           <div className="credit-card-details">
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="card-number">Card Number:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="card-number"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={creditCardDetails.cardNumber}
// // // // // // // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'cardNumber', e.target.value)}
// // // // // // // //                 placeholder="Enter Card Number"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="card-holder">Card Holder:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="card-holder"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={creditCardDetails.cardHolder}
// // // // // // // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'cardHolder', e.target.value)}
// // // // // // // //                 placeholder="Enter Card Holder Name"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="expiry-date">Expiry Date:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="expiry-date"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={creditCardDetails.expiryDate}
// // // // // // // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'expiryDate', e.target.value)}
// // // // // // // //                 placeholder="MM/YY"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="cvv">CVV:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="cvv"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={creditCardDetails.cvv}
// // // // // // // //                 onChange={(e) => handleInputChange(setCreditCardDetails, 'cvv', e.target.value)}
// // // // // // // //                 placeholder="Enter CVV"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {paymentMethod === 'debit-card' && (
// // // // // // // //           <div className="debit-card-details">
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="debit-card-number">Card Number:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="debit-card-number"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={debitCardDetails.cardNumber}
// // // // // // // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'cardNumber', e.target.value)}
// // // // // // // //                 placeholder="Enter Card Number"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="debit-card-holder">Card Holder:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="debit-card-holder"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={debitCardDetails.cardHolder}
// // // // // // // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'cardHolder', e.target.value)}
// // // // // // // //                 placeholder="Enter Card Holder Name"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="debit-expiry-date">Expiry Date:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="debit-expiry-date"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={debitCardDetails.expiryDate}
// // // // // // // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'expiryDate', e.target.value)}
// // // // // // // //                 placeholder="MM/YY"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="debit-cvv">CVV:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="debit-cvv"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={debitCardDetails.cvv}
// // // // // // // //                 onChange={(e) => handleInputChange(setDebitCardDetails, 'cvv', e.target.value)}
// // // // // // // //                 placeholder="Enter CVV"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {paymentMethod === 'net-banking' && (
// // // // // // // //           <div className="net-banking-details">
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="bank-name">Bank Name:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="bank-name"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={netBankingDetails.bankName}
// // // // // // // //                 onChange={(e) => handleInputChange(setNetBankingDetails, 'bankName', e.target.value)}
// // // // // // // //                 placeholder="Enter Bank Name"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="account-number">Account Number:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="account-number"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={netBankingDetails.accountNumber}
// // // // // // // //                 onChange={(e) => handleInputChange(setNetBankingDetails, 'accountNumber', e.target.value)}
// // // // // // // //                 placeholder="Enter Account Number"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="ifsc-code">IFSC Code:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="ifsc-code"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={netBankingDetails.ifscCode}
// // // // // // // //                 onChange={(e) => handleInputChange(setNetBankingDetails, 'ifscCode', e.target.value)}
// // // // // // // //                 placeholder="Enter IFSC Code"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         {paymentMethod === 'upi' && (
// // // // // // // //           <div className="upi-details">
// // // // // // // //             <div className="form-group">
// // // // // // // //               <label htmlFor="upi-id">UPI ID:</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 id="upi-id"
// // // // // // // //                 className="form-control"
// // // // // // // //                 value={upiDetails.upiId}
// // // // // // // //                 onChange={(e) => handleInputChange(setUpiDetails, 'upiId', e.target.value)}
// // // // // // // //                 placeholder="Enter UPI ID"
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </Modal.Body>
// // // // // // // //       <Modal.Footer>
// // // // // // // //         <Button variant="secondary" onClick={onClose}>
// // // // // // // //           Close
// // // // // // // //         </Button>
// // // // // // // //         <Button variant="primary" onClick={handlePayment}>
// // // // // // // //           Make Payment
// // // // // // // //         </Button>
// // // // // // // //       </Modal.Footer>
// // // // // // // //     </Modal>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default PaymentModal;

// // // // // // // // // // PaymentModal.jsx
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // import jsPDF from 'jspdf';
// // // // // // // // // import 'jspdf-autotable';

// // // // // // // // // const PaymentModal = () => {
// // // // // // // // //   const location = useLocation();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

// // // // // // // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // // // // // // //     cardNumber: '',
// // // // // // // // //     cardHolderName: '',
// // // // // // // // //     expiryDate: '',
// // // // // // // // //     cvv: '',
// // // // // // // // //   });
// // // // // // // // //   const [upiDetails, setUpiDetails] = useState('');
// // // // // // // // //   const [paypalEmail, setPaypalEmail] = useState('');
// // // // // // // // //   const [paymentMethod, setPaymentMethod] = useState('');


// // // // // // // // //   // const handlePayNow = async () => {
// // // // // // // // //     //     // Dummy data for testing
// // // // // // // // //     //     const paymentData = {
// // // // // // // // //     //       email:storedEmail,
// // // // // // // // //     //       amount: cartTotal,   // Dummy amount
// // // // // // // // //     //       paymentMethod: paymentMethod,
// // // // // // // // //     //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // // // // // //     //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // // // // // //     //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // // // // // //     //     };
      
// // // // // // // // //     //     try {
// // // // // // // // //     //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);
      
// // // // // // // // //     //       if (response.status === 201) {
// // // // // // // // //     //         Swal.fire({
// // // // // // // // //     //           title: 'Payment Successful!',
// // // // // // // // //     //           text: 'Your payment has been processed successfully.',
// // // // // // // // //     //           icon: 'success'
// // // // // // // // //     //         });
      
// // // // // // // // //     //         // Navigate to a different page or show a success message
// // // // // // // // //     //         generatePDF();
// // // // // // // // //     //         setTimeout(() => {
// // // // // // // // //     //           navigate('/');
// // // // // // // // //     //         }, 1000);
      
// // // // // // // // //     //         // Optional: send email or other follow-up actions
// // // // // // // // //     //         sendEmail({ ...bookingDetails, ...customerDetails });
// // // // // // // // //     //       } else {
// // // // // // // // //     //         Swal.fire({
// // // // // // // // //     //           title: 'Payment Failed',
// // // // // // // // //     //           text: 'Please try again.',
// // // // // // // // //     //           icon: 'error',
// // // // // // // // //     //         });
// // // // // // // // //     //       }
// // // // // // // // //     //     } catch (error) {
// // // // // // // // //     //       Swal.fire({
// // // // // // // // //     //         title: 'Payment Failed',
// // // // // // // // //     //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // // // // // //     //         icon: 'error',
// // // // // // // // //     //       });
// // // // // // // // //     //     }
// // // // // // // // //     //   };
      
      

// // // // // // // // //   const handlePayNow = async () => {
// // // // // // // // //     const paymentData = {
// // // // // // // // //       email: customerDetails.email,
// // // // // // // // //       amount: bookingDetails.cartTotal,
// // // // // // // // //       paymentMethod,
// // // // // // // // //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // // // // // //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // // // // // //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // // // // // //     };

// // // // // // // // //     try {
// // // // // // // // //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);
// // // // // // // // //       if (response.status === 201) {
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: 'Payment Successful!',
// // // // // // // // //           text: 'Your payment has been processed successfully.',
// // // // // // // // //           icon: 'success'
// // // // // // // // //         });

// // // // // // // // //         generatePDF();
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //           navigate('/');
// // // // // // // // //         }, 1000);
// // // // // // // // //       } else {
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: 'Payment Failed',
// // // // // // // // //           text: 'Please try again.',
// // // // // // // // //           icon: 'error',
// // // // // // // // //         });
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Payment Failed',
// // // // // // // // //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // // // // // //         icon: 'error',
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const generatePDF = () => {
// // // // // // // // //     const doc = new jsPDF();
// // // // // // // // //     doc.setFontSize(22);
// // // // // // // // //     doc.text('My-Bus', 105, 20, 'center');
// // // // // // // // //     doc.setFontSize(18);
// // // // // // // // //     doc.text('Ticket details', 105, 35, 'center');

// // // // // // // // //     doc.text('Bus Details:', 20, 100);
// // // // // // // // //     doc.autoTable({
// // // // // // // // //       startY: 105,
// // // // // // // // //       head: [['Attribute', 'Value']],
// // // // // // // // //       body: [
// // // // // // // // //         ['Bus Name', bookingDetails.bus.busName],
// // // // // // // // //         ['Bus Number', bookingDetails.bus.busNumber],
// // // // // // // // //         ['From', bookingDetails.from],
// // // // // // // // //         ['To', bookingDetails.to],
// // // // // // // // //         ['Type', bookingDetails.bus.busType],
// // // // // // // // //         ['Fare', `₹ ${bookingDetails.fare.toLocaleString()}`],
// // // // // // // // //         ['Selected Seats', bookingDetails.selectedSeats.join(', ')],
// // // // // // // // //         ['Number of Passengers', passengerDetails.length.toString()],
// // // // // // // // //         ['Booking Date', new Date(bookingDetails.bookingDate).toLocaleDateString()],
// // // // // // // // //       ],
// // // // // // // // //       didDrawPage: (data) => {
// // // // // // // // //         doc.setFontSize(12);
// // // // // // // // //         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
// // // // // // // // //       },
// // // // // // // // //     });

// // // // // // // // //     doc.setFontSize(14);
// // // // // // // // //     doc.text(`Discount: ₹ ${bookingDetails.discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
// // // // // // // // //     doc.text(`GST (5%): ₹ ${bookingDetails.GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
// // // // // // // // //     doc.text(`Total: ₹ ${bookingDetails.cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

// // // // // // // // //     doc.save('ticket-details.pdf');
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
// // // // // // // // //       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
// // // // // // // // //         Payment Details
// // // // // // // // //       </h2>

// // // // // // // // //       <div className="mb-4">
// // // // // // // // //         <h4>Select Payment Method:</h4>
// // // // // // // // //         <div>
// // // // // // // // //           <input
// // // // // // // // //             type="radio"
// // // // // // // // //             id="creditCard"
// // // // // // // // //             name="paymentMethod"
// // // // // // // // //             value="Credit Card"
// // // // // // // // //             checked={paymentMethod === 'Credit Card'}
// // // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // //           />
// // // // // // // // //           <label htmlFor="creditCard">Credit Card</label>
// // // // // // // // //         </div>
// // // // // // // // //         {paymentMethod === 'Credit Card' && (
// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Card Number"
// // // // // // // // //               value={creditCardDetails.cardNumber}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// // // // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // // // //             />
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Card Holder Name"
// // // // // // // // //               value={creditCardDetails.cardHolderName}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// // // // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // // // //             />
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Expiry Date"
// // // // // // // // //               value={creditCardDetails.expiryDate}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// // // // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // // // //             />
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="CVV"
// // // // // // // // //               value={creditCardDetails.cvv}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// // // // // // // // //               style={{ width: '100%' }}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //         <div>
// // // // // // // // //           <input
// // // // // // // // //             type="radio"
// // // // // // // // //             id="paypal"
// // // // // // // // //             name="paymentMethod"
// // // // // // // // //             value="PayPal"
// // // // // // // // //             checked={paymentMethod === 'PayPal'}
// // // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // //           />
// // // // // // // // //           <label htmlFor="paypal">PayPal</label>
// // // // // // // // //         </div>
// // // // // // // // //         {paymentMethod === 'PayPal' && (
// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <input
// // // // // // // // //               type="email"
// // // // // // // // //               placeholder="PayPal Email"
// // // // // // // // //               value={paypalEmail}
// // // // // // // // //               onChange={(e) => setPaypalEmail(e.target.value)}
// // // // // // // // //               style={{ width: '100%' }}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //         <div>
// // // // // // // // //           <input
// // // // // // // // //             type="radio"
// // // // // // // // //             id="upi"
// // // // // // // // //             name="paymentMethod"
// // // // // // // // //             value="UPI"
// // // // // // // // //             checked={paymentMethod === 'UPI'}
// // // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // //           />
// // // // // // // // //           <label htmlFor="upi">UPI</label>
// // // // // // // // //         </div>
// // // // // // // // //         {paymentMethod === 'UPI' && (
// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="UPI ID"
// // // // // // // // //               value={upiDetails}
// // // // // // // // //               onChange={(e) => setUpiDetails(e.target.value)}
// // // // // // // // //               style={{ width: '100%' }}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       <button
// // // // // // // // //         className="btn btn-primary"
// // // // // // // // //         onClick={handlePayNow}
// // // // // // // // //         style={{ width: '100%', padding: '10px', backgroundColor: '#ca5252', borderColor: '#ca5252' }}
// // // // // // // // //       >
// // // // // // // // //         Pay Now
// // // // // // // // //       </button>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default PaymentModal;

// // // // // // // // // PaymentModal.jsx
// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // // // // import axios from 'axios';
// // // // // // // // // import Swal from 'sweetalert2';
// // // // // // // // // import jsPDF from 'jspdf';
// // // // // // // // // import 'jspdf-autotable';

// // // // // // // // // const PaymentModal = () => {
// // // // // // // // //   const location = useLocation();
// // // // // // // // //   const navigate = useNavigate();
// // // // // // // // //   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

// // // // // // // // //   // Default values to avoid undefined issues
// // // // // // // // //   const fare = bookingDetails?.fare || 0;
// // // // // // // // //   const cartTotal = bookingDetails?.cartTotal || 0;
// // // // // // // // //   const discountAmount = bookingDetails?.discountAmount || 0;
// // // // // // // // //   const GST = bookingDetails?.GST || 0;

// // // // // // // // //   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');

  
// // // // // // // // //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// // // // // // // // //   const [paymentSuccess, setPaymentSuccess] = useState(false);
// // // // // // // // //   // const [paymentMethod, setPaymentMethod] = useState('');

// // // // // // // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // // // // // // //     cardNumber: '',
// // // // // // // // //     cardHolderName: '',
// // // // // // // // //     expiryDate: '',
// // // // // // // // //     cvv: '',
// // // // // // // // //   });
// // // // // // // // //   const [upiDetails, setUpiDetails] = useState('');
// // // // // // // // //   const [paypalEmail, setPaypalEmail] = useState('');
// // // // // // // // //   const [paymentMethod, setPaymentMethod] = useState('');


  
// // // // // // // // //   const handlePayNow = async () => {
// // // // // // // // //     // Dummy data for testing
// // // // // // // // //     const paymentData = {
// // // // // // // // //       email:storedEmail,
// // // // // // // // //       amount: cartTotal,   // Dummy amount
// // // // // // // // //       paymentMethod: paymentMethod,
// // // // // // // // //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // // // // // //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // // // // // //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // // // // // //     };
  
// // // // // // // // //     try {
// // // // // // // // //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);
  
// // // // // // // // //       if (response.status === 201) {
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: 'Payment Successful!',
// // // // // // // // //           text: 'Your payment has been processed successfully.',
// // // // // // // // //           icon: 'success'
// // // // // // // // //         });
  
// // // // // // // // //         // Navigate to a different page or show a success message
// // // // // // // // //         generatePDF();
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //           navigate('/');
// // // // // // // // //         }, 1000);
  
// // // // // // // // //         // Optional: send email or other follow-up actions
// // // // // // // // //         sendEmail({ ...bookingDetails, ...customerDetails });
// // // // // // // // //       } else {
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: 'Payment Failed',
// // // // // // // // //           text: 'Please try again.',
// // // // // // // // //           icon: 'error',
// // // // // // // // //         });
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       Swal.fire({
// // // // // // // // //         title: 'Payment Failed',
// // // // // // // // //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // // // // // //         icon: 'error',
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //   };
  

// // // // // // // // //   // const handlePayNow = async () => {
// // // // // // // // //   //   const paymentData = {
// // // // // // // // //   //     email: customerDetails?.email || '',
// // // // // // // // //   //     amount: cartTotal,
// // // // // // // // //   //     paymentMethod,
// // // // // // // // //   //     creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // // // // // //   //     paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // // // // // //   //     upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // // // // // //   //   };

// // // // // // // // //   //   try {
// // // // // // // // //   //     const response = await axios.post('http://localhost:3000/payment/payments', paymentData);
// // // // // // // // //   //     if (response.status === 201) {
// // // // // // // // //   //       Swal.fire({
// // // // // // // // //   //         title: 'Payment Successful!',
// // // // // // // // //   //         text: 'Your payment has been processed successfully.',
// // // // // // // // //   //         icon: 'success'
// // // // // // // // //   //       });

// // // // // // // // //   //       generatePDF();
// // // // // // // // //   //       setTimeout(() => {
// // // // // // // // //   //         navigate('/');
// // // // // // // // //   //       }, 1000);
// // // // // // // // //   //     } else {
// // // // // // // // //   //       Swal.fire({
// // // // // // // // //   //         title: 'Payment Failed',
// // // // // // // // //   //         text: 'Please try again.',
// // // // // // // // //   //         icon: 'error',
// // // // // // // // //   //       });
// // // // // // // // //   //     }
// // // // // // // // //   //   } catch (error) {
// // // // // // // // //   //     Swal.fire({
// // // // // // // // //   //       title: 'Payment Failed',
// // // // // // // // //   //       text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // // // // // //   //       icon: 'error',
// // // // // // // // //   //     });
// // // // // // // // //   //   }
// // // // // // // // //   // };

// // // // // // // // //   const generatePDF = () => {
// // // // // // // // //     const doc = new jsPDF();
// // // // // // // // //     doc.setFontSize(22);
// // // // // // // // //     doc.text('My-Bus', 105, 20, 'center');
// // // // // // // // //     doc.setFontSize(18);
// // // // // // // // //     doc.text('Ticket details', 105, 35, 'center');

// // // // // // // // //     doc.text('Bus Details:', 20, 100);
// // // // // // // // //     doc.autoTable({
// // // // // // // // //       startY: 105,
// // // // // // // // //       head: [['Attribute', 'Value']],
// // // // // // // // //       body: [
// // // // // // // // //         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
// // // // // // // // //         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
// // // // // // // // //         ['From', bookingDetails?.from || 'N/A'],
// // // // // // // // //         ['To', bookingDetails?.to || 'N/A'],
// // // // // // // // //         ['Type', bookingDetails?.bus?.busType || 'N/A'],
// // // // // // // // //         ['Fare', `₹ ${fare.toLocaleString()}`],
// // // // // // // // //         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
// // // // // // // // //         ['Number of Passengers', passengerDetails?.length || '0'],
// // // // // // // // //         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
// // // // // // // // //       ],
// // // // // // // // //       didDrawPage: (data) => {
// // // // // // // // //         doc.setFontSize(12);
// // // // // // // // //         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
// // // // // // // // //       },
// // // // // // // // //     });

// // // // // // // // //     doc.setFontSize(14);
// // // // // // // // //     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
// // // // // // // // //     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
// // // // // // // // //     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

// // // // // // // // //     doc.save('ticket-details.pdf');
// // // // // // // // //     sendEmail(bookingData);
// // // // // // // // //   };

// // // // // // // // //   const sendEmail = async (bookingData) => {
// // // // // // // // //     try {
// // // // // // // // //       const emailResponse = await fetch('http://localhost:3000/email', {
// // // // // // // // //         method: 'POST',
// // // // // // // // //         headers: {
// // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify({
// // // // // // // // //           recipientEmail: 'maazhgl66@gmail.com',
// // // // // // // // //           bookingData: bookingData,
// // // // // // // // //         }),
// // // // // // // // //       });

// // // // // // // // //       if (emailResponse.ok) {
// // // // // // // // //         Swal.fire({
// // // // // // // // //           title: "Email sent Successful!",
// // // // // // // // //           text: "",
// // // // // // // // //           icon: "success"
// // // // // // // // //         });
// // // // // // // // //         // console.log('Email sent successfully.');
// // // // // // // // //       } else {
// // // // // // // // //         const emailErrorData = await emailResponse.json();
// // // // // // // // //         console.error('Email sending error:', emailErrorData);
// // // // // // // // //         alert('Failed to send email. Please check your internet connection and try again.');
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error('Error sending email:', error);
// // // // // // // // //       alert('An error occurred while sending the email. Please try again.');
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
// // // // // // // // //       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
// // // // // // // // //         Payment Details
// // // // // // // // //       </h2>

// // // // // // // // //       <div className="mb-4">
// // // // // // // // //         <h4>Select Payment Method:</h4>
// // // // // // // // //         <div>
// // // // // // // // //           <input
// // // // // // // // //             type="radio"
// // // // // // // // //             id="creditCard"
// // // // // // // // //             name="paymentMethod"
// // // // // // // // //             value="Credit Card"
// // // // // // // // //             checked={paymentMethod === 'Credit Card'}
// // // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // //           />
// // // // // // // // //           <label htmlFor="creditCard">Credit Card</label>
// // // // // // // // //         </div>
// // // // // // // // //         {paymentMethod === 'Credit Card' && (
// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Card Number"
// // // // // // // // //               value={creditCardDetails.cardNumber}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// // // // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // // // //             />
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Card Holder Name"
// // // // // // // // //               value={creditCardDetails.cardHolderName}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// // // // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // // // //             />
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="Expiry Date"
// // // // // // // // //               value={creditCardDetails.expiryDate}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// // // // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // // // //             />
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="CVV"
// // // // // // // // //               value={creditCardDetails.cvv}
// // // // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// // // // // // // // //               style={{ width: '100%' }}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //         <div>
// // // // // // // // //           <input
// // // // // // // // //             type="radio"
// // // // // // // // //             id="paypal"
// // // // // // // // //             name="paymentMethod"
// // // // // // // // //             value="PayPal"
// // // // // // // // //             checked={paymentMethod === 'PayPal'}
// // // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // //           />
// // // // // // // // //           <label htmlFor="paypal">PayPal</label>
// // // // // // // // //         </div>
// // // // // // // // //         {paymentMethod === 'PayPal' && (
// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <input
// // // // // // // // //               type="email"
// // // // // // // // //               placeholder="PayPal Email"
// // // // // // // // //               value={paypalEmail}
// // // // // // // // //               onChange={(e) => setPaypalEmail(e.target.value)}
// // // // // // // // //               style={{ width: '100%' }}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //         <div>
// // // // // // // // //           <input
// // // // // // // // //             type="radio"
// // // // // // // // //             id="upi"
// // // // // // // // //             name="paymentMethod"
// // // // // // // // //             value="UPI"
// // // // // // // // //             checked={paymentMethod === 'UPI'}
// // // // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // // // //           />
// // // // // // // // //           <label htmlFor="upi">UPI</label>
// // // // // // // // //         </div>
// // // // // // // // //         {paymentMethod === 'UPI' && (
// // // // // // // // //           <div className="mb-4">
// // // // // // // // //             <input
// // // // // // // // //               type="text"
// // // // // // // // //               placeholder="UPI ID"
// // // // // // // // //               value={upiDetails}
// // // // // // // // //               onChange={(e) => setUpiDetails(e.target.value)}
// // // // // // // // //               style={{ width: '100%' }}
// // // // // // // // //             />
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       <button
// // // // // // // // //                   type="button"
// // // // // // // // //                   className="btn btn-secondary"
// // // // // // // // //                   onClick={() => setShowPaymentModal(false)}
// // // // // // // // //                   style={{ backgroundColor: '#ca5252', border: '2px solid black', color: 'white', fontWeight: 'bold' }}

// // // // // // // // //                 >
// // // // // // // // //                   Close
// // // // // // // // //                 </button>
// // // // // // // // //                 <button type="button" className="btn btn-primary" onClick={handlePayNow}
// // // // // // // // //                   style={{ backgroundColor: '#ca5252', border: '2px solid black', color: 'white', fontWeight: 'bold' }}
// // // // // // // // //                 >
// // // // // // // // //                   Pay Now
// // // // // // // // //                 </button>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // //  {/* Confirm Booking Button */}
// // // // // // // // //  {!showPaymentModal && (
// // // // // // // // //   <div className="text-center">
// // // // // // // // //     <button className="btn btn-primary" onClick={handleConfirmBooking} style={{ backgroundColor: '#ca5252', border: '2px solid black' }}>
// // // // // // // // //       Confirm Booking
// // // // // // // // //     </button>
// // // // // // // // //     <button className="btn btn-outline-secondary" style={{ margin: '8px', backgroundColor: '#ca5252', border: '2px solid black', color: 'white' }} onClick={() => navigate('/')}>
// // // // // // // // //       Cancel
// // // // // // // // //     </button>
// // // // // // // // //   </div>
// // // // // // // // // )}


// // // // // // // // // export default PaymentModal;
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // // import axios from 'axios';
// // // // // // // import Swal from 'sweetalert2';
// // // // // // // import jsPDF from 'jspdf';
// // // // // // // import 'jspdf-autotable';

// // // // // // // const PaymentModal = () => {
// // // // // // //   const location = useLocation();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

// // // // // // //   // Default values to avoid undefined issues
// // // // // // //   const fare = bookingDetails?.fare || 0;
// // // // // // //   const cartTotal = bookingDetails?.cartTotal || 0;
// // // // // // //   const discountAmount = bookingDetails?.discountAmount || 0;
// // // // // // //   const GST = bookingDetails?.GST || 0;

// // // // // // //   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
// // // // // // //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// // // // // // //   const [paymentSuccess, setPaymentSuccess] = useState(false);
// // // // // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // // // // //     cardNumber: '',
// // // // // // //     cardHolderName: '',
// // // // // // //     expiryDate: '',
// // // // // // //     cvv: '',
// // // // // // //   });
// // // // // // //   const [upiDetails, setUpiDetails] = useState('');
// // // // // // //   const [paypalEmail, setPaypalEmail] = useState('');
// // // // // // //   const [paymentMethod, setPaymentMethod] = useState('');


// // // // // // //   const bookingData = {
// // // // // // //     customerName: customerDetails?.name || 'N/A',
// // // // // // //     phoneNumber: customerDetails?.phoneNumber || 'N/A',
// // // // // // //     email: customerEmail || 'N/A',
// // // // // // //     address: customerDetails?.address || 'N/A',
// // // // // // //       };


// // // // // // //   const storedEmail = localStorage.getItem('email') || 'N/A';
// // // // // // //   const handlePayNow = async () => {
// // // // // // //     const paymentData = {
// // // // // // //       email:storedEmail,
// // // // // // //       amount: cartTotal,
// // // // // // //       paymentMethod: paymentMethod,
// // // // // // //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // // // //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // // // //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // // // //     };
  
// // // // // // //     try {
// // // // // // //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);
  
// // // // // // //       if (response.status === 201) {
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Payment Successful!',
// // // // // // //           text: 'Your payment has been processed successfully.',
// // // // // // //           icon: 'success'
// // // // // // //         });
  
// // // // // // //         // Navigate to a different page or show a success message
// // // // // // //         generatePDF();
// // // // // // //         setTimeout(() => {
// // // // // // //           navigate('/');
// // // // // // //         }, 1000);
  
// // // // // // //         // Optional: send email or other follow-up actions
// // // // // // //         sendEmail({ ...bookingDetails, ...customerDetails });
// // // // // // //       } else {
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Payment Failed',
// // // // // // //           text: 'Please try again.',
// // // // // // //           icon: 'error',
// // // // // // //         });
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       Swal.fire({
// // // // // // //         title: 'Payment Failed',
// // // // // // //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // // // //         icon: 'error',
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const generatePDF = () => {
// // // // // // //     const doc = new jsPDF();
// // // // // // //     doc.setFontSize(22);
// // // // // // //     doc.text('My-Bus', 105, 20, 'center');
// // // // // // //     doc.setFontSize(18);
// // // // // // //     doc.text('Ticket details', 105, 35, 'center');

// // // // // // //     doc.text('Bus Details:', 20, 100);
// // // // // // //     doc.autoTable({
// // // // // // //       startY: 105,
// // // // // // //       head: [['Attribute', 'Value']],
// // // // // // //       body: [
// // // // // // //         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
// // // // // // //         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
// // // // // // //         ['From', bookingDetails?.from || 'N/A'],
// // // // // // //         ['To', bookingDetails?.to || 'N/A'],
// // // // // // //         ['Type', bookingDetails?.bus?.busType || 'N/A'],
// // // // // // //         ['Fare', `₹ ${fare.toLocaleString()}`],
// // // // // // //         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
// // // // // // //         ['Number of Passengers', passengerDetails?.length || '0'],
// // // // // // //         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
// // // // // // //       ],
// // // // // // //       didDrawPage: (data) => {
// // // // // // //         doc.setFontSize(12);
// // // // // // //         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
// // // // // // //       },
// // // // // // //     });

// // // // // // //     doc.setFontSize(14);
// // // // // // //     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
// // // // // // //     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
// // // // // // //     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

// // // // // // //     doc.save('ticket-details.pdf');
// // // // // // //     // sendEmail(bookingDetails );
// // // // // // //   };

// // // // // // //   const sendEmail = async (bookingData) => {
// // // // // // //     try {
// // // // // // //       const emailResponse = await fetch('http://localhost:3000/email', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //         },
// // // // // // //         body: JSON.stringify({
// // // // // // //           recipientEmail: 'maazhgl66@gmail.com',
// // // // // // //           bookingData: bookingData,
// // // // // // //         }),
// // // // // // //       });

// // // // // // //       if (emailResponse.ok) {
// // // // // // //         Swal.fire({
// // // // // // //           title: "Email sent Successfully!",
// // // // // // //           text: "",
// // // // // // //           icon: "success"
// // // // // // //         });
// // // // // // //       } else {
// // // // // // //         const emailErrorData = await emailResponse.json();
// // // // // // //         console.error('Email sending error:', emailErrorData);
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Email Sending Failed',
// // // // // // //           text: `Error: ${errorData.message || 'Unknown error occurred'}`,
// // // // // // //           icon: 'error',
// // // // // // //         });
// // // // // // //         // alert('Failed to send email. Please check your internet connection and try again.');
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error sending email:', error);
// // // // // // //     Swal.fire({
// // // // // // //       title: 'Email Sending Failed',
// // // // // // //       text: `Error: ${error.message}`,
// // // // // // //       icon: 'error',
// // // // // // //     });
// // // // // // //   }
// // // // // // //   };

// // // // // // //   const handleConfirmBooking = () => {
// // // // // // //     setShowPaymentModal(true);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
     
// // // // // // //       <div className="mb-4" style={{ textAlign: 'center' }}>
// // // // // // //         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Enter Email for PDF:</h4>
// // // // // // //         <input
// // // // // // //           type="email"
// // // // // // //           className="form-control"
// // // // // // //           value={customerEmail}
// // // // // // //           onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // //           placeholder="Enter Email"
// // // // // // //           style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}

// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
// // // // // // //         Payment Details
// // // // // // //       </h2>

// // // // // // //       <div className="mb-4">
// // // // // // //         <h4>Select Payment Method:</h4>
// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="radio"
// // // // // // //             id="creditCard"
// // // // // // //             name="paymentMethod"
// // // // // // //             value="Credit Card"
// // // // // // //             checked={paymentMethod === 'Credit Card'}
// // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // //           />
// // // // // // //           <label htmlFor="creditCard">Credit Card</label>
// // // // // // //         </div>
// // // // // // //         {paymentMethod === 'Credit Card' && (
// // // // // // //           <div className="mb-4">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Card Number"
// // // // // // //               value={creditCardDetails.cardNumber}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Card Holder Name"
// // // // // // //               value={creditCardDetails.cardHolderName}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Expiry Date"
// // // // // // //               value={creditCardDetails.expiryDate}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="CVV"
// // // // // // //               value={creditCardDetails.cvv}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// // // // // // //               style={{ width: '100%' }}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="radio"
// // // // // // //             id="paypal"
// // // // // // //             name="paymentMethod"
// // // // // // //             value="PayPal"
// // // // // // //             checked={paymentMethod === 'PayPal'}
// // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // //           />
// // // // // // //           <label htmlFor="paypal">PayPal</label>
// // // // // // //         </div>
// // // // // // //         {paymentMethod === 'PayPal' && (
// // // // // // //           <div className="mb-4">
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               placeholder="PayPal Email"
// // // // // // //               value={paypalEmail}
// // // // // // //               onChange={(e) => setPaypalEmail(e.target.value)}
// // // // // // //               style={{ width: '100%' }}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="radio"
// // // // // // //             id="upi"
// // // // // // //             name="paymentMethod"
// // // // // // //             value="UPI"
// // // // // // //             checked={paymentMethod === 'UPI'}
// // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // //           />
// // // // // // //           <label htmlFor="upi">UPI</label>
// // // // // // //         </div>
// // // // // // //         {paymentMethod === 'UPI' && (
// // // // // // //           <div className="mb-4">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="UPI ID"
// // // // // // //               value={upiDetails}
// // // // // // //               onChange={(e) => setUpiDetails(e.target.value)}
// // // // // // //               style={{ width: '100%' }}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       <button
// // // // // // //         className="btn btn-primary"
// // // // // // //         onClick={handleConfirmBooking}
// // // // // // //         style={{ backgroundColor: '#ca5252', border: 'none' }}
// // // // // // //       >
// // // // // // //         Confirm Booking
// // // // // // //       </button>

// // // // // // //       {showPaymentModal && (
// // // // // // //         <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
// // // // // // //           <div className="modal-dialog" role="document">
// // // // // // //             <div className="modal-content">
// // // // // // //               <div className="modal-header">
// // // // // // //                 <h5 className="modal-title">Payment Confirmation</h5>
// // // // // // //                 <button type="button" className="close" onClick={() => setShowPaymentModal(false)}>
// // // // // // //                   &times;
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //               <div className="modal-body">
// // // // // // //                 <p>Your total amount is: ₹{cartTotal.toLocaleString()}</p>
// // // // // // //               </div>
// // // // // // //               <div className="modal-footer">
// // // // // // //                 <button
// // // // // // //                   type="button"
// // // // // // //                   className="btn btn-secondary"
// // // // // // //                   onClick={() => setShowPaymentModal(false)}
// // // // // // //                 >
// // // // // // //                   Close
// // // // // // //                 </button>
// // // // // // //                 <button
// // // // // // //                   type="button"
// // // // // // //                   className="btn btn-primary"
// // // // // // //                   onClick={handlePayNow}
// // // // // // //                 >
// // // // // // //                   Pay Now
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PaymentModal;
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // // import axios from 'axios';
// // // // // // // import Swal from 'sweetalert2';
// // // // // // // import jsPDF from 'jspdf';
// // // // // // // import 'jspdf-autotable';

// // // // // // // const PaymentModal = () => {
// // // // // // //   const location = useLocation();
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

// // // // // // //   const fare = bookingDetails?.fare || 0;
// // // // // // //   const cartTotal = bookingDetails?.cartTotal || 0;
// // // // // // //   const discountAmount = bookingDetails?.discountAmount || 0;
// // // // // // //   const GST = bookingDetails?.GST || 0;

// // // // // // //   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
// // // // // // //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// // // // // // //   const [paymentSuccess, setPaymentSuccess] = useState(false);
// // // // // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // // // // //     cardNumber: '',
// // // // // // //     cardHolderName: '',
// // // // // // //     expiryDate: '',
// // // // // // //     cvv: '',
// // // // // // //   });
// // // // // // //   const [upiDetails, setUpiDetails] = useState('');
// // // // // // //   const [paypalEmail, setPaypalEmail] = useState('');
// // // // // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // // // // //   const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchSavedPaymentMethods = async () => {
// // // // // // //       try {
// // // // // // //         const response = await axios.get('http://localhost:3000/payment/payments/maaz@gmail.com');
// // // // // // //         if (response.status === 200) {
// // // // // // //           setSavedPaymentMethods(response.data);
// // // // // // //         }
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error fetching saved payment methods:', error);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchSavedPaymentMethods();
// // // // // // //   }, []);

// // // // // // //   const handlePayNow = async () => {
// // // // // // //     const storedEmail = localStorage.getItem('email') || 'N/A';
// // // // // // //     const paymentData = {
// // // // // // //       email: storedEmail,
// // // // // // //       amount: cartTotal,
// // // // // // //       paymentMethod: paymentMethod,
// // // // // // //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // // // //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // // // //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // // // //     };

// // // // // // //     try {
// // // // // // //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);

// // // // // // //       if (response.status === 201) {
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Payment Successful!',
// // // // // // //           text: 'Your payment has been processed successfully.',
// // // // // // //           icon: 'success'
// // // // // // //         });

// // // // // // //         generatePDF();
// // // // // // //         setTimeout(() => {
// // // // // // //           navigate('/');
// // // // // // //         }, 1000);

// // // // // // //         sendEmail({ ...bookingDetails, ...customerDetails });
// // // // // // //       } else {
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Payment Failed',
// // // // // // //           text: 'Please try again.',
// // // // // // //           icon: 'error',
// // // // // // //         });
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       Swal.fire({
// // // // // // //         title: 'Payment Failed',
// // // // // // //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // // // //         icon: 'error',
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const generatePDF = () => {
// // // // // // //     const doc = new jsPDF();
// // // // // // //     doc.setFontSize(22);
// // // // // // //     doc.text('My-Bus', 105, 20, 'center');
// // // // // // //     doc.setFontSize(18);
// // // // // // //     doc.text('Ticket details', 105, 35, 'center');

// // // // // // //     doc.text('Bus Details:', 20, 100);
// // // // // // //     doc.autoTable({
// // // // // // //       startY: 105,
// // // // // // //       head: [['Attribute', 'Value']],
// // // // // // //       body: [
// // // // // // //         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
// // // // // // //         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
// // // // // // //         ['From', bookingDetails?.from || 'N/A'],
// // // // // // //         ['To', bookingDetails?.to || 'N/A'],
// // // // // // //         ['Type', bookingDetails?.bus?.busType || 'N/A'],
// // // // // // //         ['Fare', `₹ ${fare.toLocaleString()}`],
// // // // // // //         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
// // // // // // //         ['Number of Passengers', passengerDetails?.length || '0'],
// // // // // // //         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
// // // // // // //       ],
// // // // // // //       didDrawPage: (data) => {
// // // // // // //         doc.setFontSize(12);
// // // // // // //         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
// // // // // // //       },
// // // // // // //     });

// // // // // // //     doc.setFontSize(14);
// // // // // // //     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
// // // // // // //     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
// // // // // // //     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

// // // // // // //     doc.save('ticket-details.pdf');
// // // // // // //   };

// // // // // // //   const sendEmail = async (bookingData) => {
// // // // // // //     try {
// // // // // // //       const emailResponse = await fetch('http://localhost:3000/email', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //         },
// // // // // // //         body: JSON.stringify({
// // // // // // //           recipientEmail: 'maazhgl66@gmail.com',
// // // // // // //           bookingData: bookingData,
// // // // // // //         }),
// // // // // // //       });

// // // // // // //       if (emailResponse.ok) {
// // // // // // //         Swal.fire({
// // // // // // //           title: "Email sent Successfully!",
// // // // // // //           text: "",
// // // // // // //           icon: "success"
// // // // // // //         });
// // // // // // //       } else {
// // // // // // //         const emailErrorData = await emailResponse.json();
// // // // // // //         console.error('Email sending error:', emailErrorData);
// // // // // // //         Swal.fire({
// // // // // // //           title: 'Email Sending Failed',
// // // // // // //           text: `Error: ${errorData.message || 'Unknown error occurred'}`,
// // // // // // //           icon: 'error',
// // // // // // //         });
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error sending email:', error);
// // // // // // //       Swal.fire({
// // // // // // //         title: 'Email Sending Failed',
// // // // // // //         text: `Error: ${error.message}`,
// // // // // // //         icon: 'error',
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleConfirmBooking = () => {
// // // // // // //     setShowPaymentModal(true);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
// // // // // // //       <div className="mb-4" style={{ textAlign: 'center' }}>
// // // // // // //         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Enter Email for PDF:</h4>
// // // // // // //         <input
// // // // // // //           type="email"
// // // // // // //           className="form-control"
// // // // // // //           value={customerEmail}
// // // // // // //           onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // // //           placeholder="Enter Email"
// // // // // // //           style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
// // // // // // //         Payment Details
// // // // // // //       </h2>

// // // // // // //       <div className="mb-4">
// // // // // // //         <h4>Select Payment Method:</h4>
// // // // // // //         {savedPaymentMethods.length > 0 && (
// // // // // // //           <div className="mb-4">
// // // // // // //             <h5>Saved Payment Methods:</h5>
// // // // // // //             {savedPaymentMethods.map((method, index) => (
// // // // // // //               <div key={index}>
// // // // // // //                 <input
// // // // // // //                   type="radio"
// // // // // // //                   id={`savedMethod${index}`}
// // // // // // //                   name="paymentMethod"
// // // // // // //                   value={method.type}
// // // // // // //                   onChange={(e) => {
// // // // // // //                     setPaymentMethod(e.target.value);
// // // // // // //                     if (e.target.value === 'Credit Card') {
// // // // // // //                       setCreditCardDetails(method.details);
// // // // // // //                     } else if (e.target.value === 'PayPal') {
// // // // // // //                       setPaypalEmail(method.details.email);
// // // // // // //                     } else if (e.target.value === 'UPI') {
// // // // // // //                       setUpiDetails(method.details.upiId);
// // // // // // //                     }
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //                 <label htmlFor={`savedMethod${index}`}>{method.type}</label>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="radio"
// // // // // // //             id="creditCard"
// // // // // // //             name="paymentMethod"
// // // // // // //             value="Credit Card"
// // // // // // //             checked={paymentMethod === 'Credit Card'}
// // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // //           />
// // // // // // //           <label htmlFor="creditCard">Credit Card</label>
// // // // // // //         </div>
// // // // // // //         {paymentMethod === 'Credit Card' && (
// // // // // // //           <div className="mb-4">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Card Number"
// // // // // // //               value={creditCardDetails.cardNumber}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Card Holder Name"
// // // // // // //               value={creditCardDetails.cardHolderName}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Expiry Date (MM/YY)"
// // // // // // //               value={creditCardDetails.expiryDate}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="CVV"
// // // // // // //               value={creditCardDetails.cvv}
// // // // // // //               onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="radio"
// // // // // // //             id="upi"
// // // // // // //             name="paymentMethod"
// // // // // // //             value="UPI"
// // // // // // //             checked={paymentMethod === 'UPI'}
// // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // //           />
// // // // // // //           <label htmlFor="upi">UPI</label>
// // // // // // //         </div>
// // // // // // //         {paymentMethod === 'UPI' && (
// // // // // // //           <div className="mb-4">
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="UPI ID"
// // // // // // //               value={upiDetails}
// // // // // // //               onChange={(e) => setUpiDetails(e.target.value)}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //         <div>
// // // // // // //           <input
// // // // // // //             type="radio"
// // // // // // //             id="paypal"
// // // // // // //             name="paymentMethod"
// // // // // // //             value="PayPal"
// // // // // // //             checked={paymentMethod === 'PayPal'}
// // // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // // //           />
// // // // // // //           <label htmlFor="paypal">PayPal</label>
// // // // // // //         </div>
// // // // // // //         {paymentMethod === 'PayPal' && (
// // // // // // //           <div className="mb-4">
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               placeholder="PayPal Email"
// // // // // // //               value={paypalEmail}
// // // // // // //               onChange={(e) => setPaypalEmail(e.target.value)}
// // // // // // //               style={{ width: '100%', marginBottom: '10px' }}
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       <button
// // // // // // //         className="btn btn-primary"
// // // // // // //         onClick={handleConfirmBooking}
// // // // // // //         style={{ backgroundColor: '#ca5252', fontWeight: 'bold' }}
// // // // // // //       >
// // // // // // //         Confirm Booking
// // // // // // //       </button>

// // // // // // //       {showPaymentModal && (
// // // // // // //         <div className="modal show" style={{ display: 'block' }}>
// // // // // // //           <div className="modal-dialog">
// // // // // // //             <div className="modal-content">
// // // // // // //               <div className="modal-header">
// // // // // // //                 <h5 className="modal-title">Payment Details</h5>
// // // // // // //                 <button type="button" className="close" onClick={() => setShowPaymentModal(false)}>
// // // // // // //                   <span>&times;</span>
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //               <div className="modal-body">
// // // // // // //                 <p>Fare: ₹{fare}</p>
// // // // // // //                 <p>Discount: ₹{discountAmount}</p>
// // // // // // //                 <p>GST (5%): ₹{GST}</p>
// // // // // // //                 <p>Total: ₹{cartTotal}</p>
// // // // // // //                 <p>Payment Method: {paymentMethod}</p>
// // // // // // //                 {paymentMethod === 'Credit Card' && (
// // // // // // //                   <div>
// // // // // // //                     <p>Card Number: {creditCardDetails.cardNumber}</p>
// // // // // // //                     <p>Card Holder Name: {creditCardDetails.cardHolderName}</p>
// // // // // // //                     <p>Expiry Date: {creditCardDetails.expiryDate}</p>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //                 {paymentMethod === 'UPI' && <p>UPI ID: {upiDetails}</p>}
// // // // // // //                 {paymentMethod === 'PayPal' && <p>PayPal Email: {paypalEmail}</p>}
// // // // // // //               </div>
// // // // // // //               <div className="modal-footer">
// // // // // // //                 <button type="button" className="btn btn-secondary" onClick={() => setShowPaymentModal(false)}>
// // // // // // //                   Close
// // // // // // //                 </button>
// // // // // // //                 <button type="button" className="btn btn-primary" onClick={handlePayNow}>
// // // // // // //                   Pay Now
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {paymentSuccess && (
// // // // // // //         <div className="alert alert-success mt-4">
// // // // // // //           Payment successful! A confirmation email has been sent to {customerEmail}.
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PaymentModal;


// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // // import axios from 'axios';
// // // // // // import Swal from 'sweetalert2';
// // // // // // import jsPDF from 'jspdf';
// // // // // // import 'jspdf-autotable';

// // // // // // const PaymentModal = () => {
// // // // // //   const location = useLocation();
// // // // // //   const navigate = useNavigate();
// // // // // //   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

// // // // // //   const fare = bookingDetails?.fare || 0;
// // // // // //   const cartTotal = bookingDetails?.cartTotal || 0;
// // // // // //   const discountAmount = bookingDetails?.discountAmount || 0;
// // // // // //   const GST = bookingDetails?.GST || 0;

// // // // // //   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
// // // // // //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// // // // // //   const [paymentSuccess, setPaymentSuccess] = useState(false);
// // // // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // // // //     cardNumber: '',
// // // // // //     cardHolderName: '',
// // // // // //     expiryDate: '',
// // // // // //     cvv: '',
// // // // // //   });
// // // // // //   const [upiDetails, setUpiDetails] = useState('');
// // // // // //   const [paypalEmail, setPaypalEmail] = useState('');
// // // // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // // // //   const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     const fetchSavedPaymentMethods = async () => {
// // // // // //       try {
// // // // // //         const response = await axios.get('http://localhost:3000/payment/payments/maaz@gmail.com');
// // // // // //         if (response.status === 200) {
// // // // // //           setSavedPaymentMethods(response.data);
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching saved payment methods:', error);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchSavedPaymentMethods();
// // // // // //   }, []);

// // // // // //   const handlePayNow = async () => {
// // // // // //     const storedEmail = localStorage.getItem('email') || 'N/A';
// // // // // //     const paymentData = {
// // // // // //       email: storedEmail,
// // // // // //       amount: cartTotal,
// // // // // //       paymentMethod: paymentMethod,
// // // // // //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // // //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // // //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);

// // // // // //       if (response.status === 201) {
// // // // // //         Swal.fire({
// // // // // //           title: 'Payment Successful!',
// // // // // //           text: 'Your payment has been processed successfully.',
// // // // // //           icon: 'success'
// // // // // //         });

// // // // // //         generatePDF();
// // // // // //         setTimeout(() => {
// // // // // //           navigate('/');
// // // // // //         }, 1000);

// // // // // //         sendEmail({ ...bookingDetails, ...customerDetails });
// // // // // //       } else {
// // // // // //         Swal.fire({
// // // // // //           title: 'Payment Failed',
// // // // // //           text: 'Please try again.',
// // // // // //           icon: 'error',
// // // // // //         });
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       Swal.fire({
// // // // // //         title: 'Payment Failed',
// // // // // //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // // //         icon: 'error',
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const generatePDF = () => {
// // // // // //     const doc = new jsPDF();
// // // // // //     doc.setFontSize(22);
// // // // // //     doc.text('My-Bus', 105, 20, 'center');
// // // // // //     doc.setFontSize(18);
// // // // // //     doc.text('Ticket details', 105, 35, 'center');

// // // // // //     doc.text('Bus Details:', 20, 100);
// // // // // //     doc.autoTable({
// // // // // //       startY: 105,
// // // // // //       head: [['Attribute', 'Value']],
// // // // // //       body: [
// // // // // //         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
// // // // // //         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
// // // // // //         ['From', bookingDetails?.from || 'N/A'],
// // // // // //         ['To', bookingDetails?.to || 'N/A'],
// // // // // //         ['Type', bookingDetails?.bus?.busType || 'N/A'],
// // // // // //         ['Fare', `₹ ${fare.toLocaleString()}`],
// // // // // //         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
// // // // // //         ['Number of Passengers', passengerDetails?.length || '0'],
// // // // // //         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
// // // // // //       ],
// // // // // //       didDrawPage: (data) => {
// // // // // //         doc.setFontSize(12);
// // // // // //         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
// // // // // //       },
// // // // // //     });

// // // // // //     doc.setFontSize(14);
// // // // // //     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
// // // // // //     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
// // // // // //     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

// // // // // //     doc.save('ticket-details.pdf');
// // // // // //   };

// // // // // //   const sendEmail = async (bookingData) => {
// // // // // //     try {
// // // // // //       const emailResponse = await fetch('http://localhost:3000/email', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify({
// // // // // //           recipientEmail: 'maazhgl66@gmail.com',
// // // // // //           bookingData: bookingData,
// // // // // //         }),
// // // // // //       });

// // // // // //       if (emailResponse.ok) {
// // // // // //         Swal.fire({
// // // // // //           title: "Email sent Successfully!",
// // // // // //           text: "",
// // // // // //           icon: "success"
// // // // // //         });
// // // // // //       } else {
// // // // // //         const emailErrorData = await emailResponse.json();
// // // // // //         console.error('Email sending error:', emailErrorData);
// // // // // //         Swal.fire({
// // // // // //           title: 'Email Sending Failed',
// // // // // //           text: `Error: ${emailErrorData.message || 'Unknown error occurred'}`,
// // // // // //           icon: 'error',
// // // // // //         });
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error('Error sending email:', error);
// // // // // //       Swal.fire({
// // // // // //         title: 'Email Sending Failed',
// // // // // //         text: `Error: ${error.message}`,
// // // // // //         icon: 'error',
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleConfirmBooking = () => {
// // // // // //     setShowPaymentModal(true);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
// // // // // //       <div className="mb-4" style={{ textAlign: 'center' }}>
// // // // // //         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Enter Email for PDF:</h4>
// // // // // //         <input
// // // // // //           type="email"
// // // // // //           className="form-control"
// // // // // //           value={customerEmail}
// // // // // //           onChange={(e) => setCustomerEmail(e.target.value)}
// // // // // //           placeholder="Enter Email"
// // // // // //           style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
// // // // // //         />
// // // // // //       </div>
// // // // // //       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
// // // // // //         Payment Details
// // // // // //       </h2>

// // // // // //       <div className="mb-4">
// // // // // //         <h4>Select Payment Method:</h4>
// // // // // //         {savedPaymentMethods.length > 0 && (
// // // // // //           <div className="mb-4">
// // // // // //             <h5>Saved Payment Methods:</h5>
// // // // // //             {savedPaymentMethods.map((method, index) => (
// // // // // //               <div key={index}>
// // // // // //                 <input
// // // // // //                   type="radio"
// // // // // //                   id={`savedMethod${index}`}
// // // // // //                   name="paymentMethod"
// // // // // //                   value={method.type}
// // // // // //                   onChange={(e) => {
// // // // // //                     setPaymentMethod(e.target.value);
// // // // // //                     if (e.target.value === 'Credit Card') {
// // // // // //                       setCreditCardDetails(method.details);
// // // // // //                     } else if (e.target.value === 'PayPal') {
// // // // // //                       setPaypalEmail(method.details.email);
// // // // // //                     } else if (e.target.value === 'UPI') {
// // // // // //                       setUpiDetails(method.details.upiId);
// // // // // //                     }
// // // // // //                   }}
// // // // // //                 />
// // // // // //                 <label htmlFor={`savedMethod${index}`}>{method.type}</label>
// // // // // //                 {method.type === 'Credit Card' && (
// // // // // //                   <div>
// // // // // //                     <p>Card Number: {method.details.cardNumber}</p>
// // // // // //                     <p>Card Holder Name: {method.details.cardHolderName}</p>
// // // // // //                     <p>Expiry Date: {method.details.expiryDate}</p>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //                 {method.type === 'UPI' && <p>UPI ID: {method.details.upiId}</p>}
// // // // // //                 {method.type === 'PayPal' && <p>PayPal Email: {method.details.email}</p>}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //         <div>
// // // // // //           <input
// // // // // //             type="radio"
// // // // // //             id="creditCard"
// // // // // //             name="paymentMethod"
// // // // // //             value="Credit Card"
// // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // //           />
// // // // // //           <label htmlFor="creditCard">Credit Card</label>
// // // // // //           {paymentMethod === 'Credit Card' && (
// // // // // //             <div>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 className="form-control"
// // // // // //                 placeholder="Card Number"
// // // // // //                 value={creditCardDetails.cardNumber}
// // // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// // // // // //               />
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 className="form-control"
// // // // // //                 placeholder="Card Holder Name"
// // // // // //                 value={creditCardDetails.cardHolderName}
// // // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// // // // // //               />
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 className="form-control"
// // // // // //                 placeholder="Expiry Date"
// // // // // //                 value={creditCardDetails.expiryDate}
// // // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// // // // // //               />
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 className="form-control"
// // // // // //                 placeholder="CVV"
// // // // // //                 value={creditCardDetails.cvv}
// // // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <div>
// // // // // //           <input
// // // // // //             type="radio"
// // // // // //             id="paypal"
// // // // // //             name="paymentMethod"
// // // // // //             value="PayPal"
// // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // //           />
// // // // // //           <label htmlFor="paypal">PayPal</label>
// // // // // //           {paymentMethod === 'PayPal' && (
// // // // // //             <div>
// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 className="form-control"
// // // // // //                 placeholder="PayPal Email"
// // // // // //                 value={paypalEmail}
// // // // // //                 onChange={(e) => setPaypalEmail(e.target.value)}
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <div>
// // // // // //           <input
// // // // // //             type="radio"
// // // // // //             id="upi"
// // // // // //             name="paymentMethod"
// // // // // //             value="UPI"
// // // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // // //           />
// // // // // //           <label htmlFor="upi">UPI</label>
// // // // // //           {paymentMethod === 'UPI' && (
// // // // // //             <div>
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 className="form-control"
// // // // // //                 placeholder="UPI ID"
// // // // // //                 value={upiDetails}
// // // // // //                 onChange={(e) => setUpiDetails(e.target.value)}
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="mb-4">
// // // // // //         <button
// // // // // //           className="btn btn-primary"
// // // // // //           onClick={handlePayNow}
// // // // // //           style={{ backgroundColor: '#ca5252', border: 'none' }}
// // // // // //         >
// // // // // //           Confirm Booking
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PaymentModal;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // // import axios from 'axios';
// // // // // import Swal from 'sweetalert2';
// // // // // import jsPDF from 'jspdf';
// // // // // import 'jspdf-autotable';

// // // // // const PaymentModal = () => {
// // // // //   const location = useLocation();
// // // // //   const navigate = useNavigate();
// // // // //   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

// // // // //   const fare = bookingDetails?.fare || 0;
// // // // //   const cartTotal = bookingDetails?.cartTotal || 0;
// // // // //   const discountAmount = bookingDetails?.discountAmount || 0;
// // // // //   const GST = bookingDetails?.GST || 0;

// // // // //   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
// // // // //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// // // // //   const [paymentSuccess, setPaymentSuccess] = useState(false);
// // // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // // //     cardNumber: '',
// // // // //     cardHolderName: '',
// // // // //     expiryDate: '',
// // // // //     cvv: '',
// // // // //   });
// // // // //   const [upiDetails, setUpiDetails] = useState('');
// // // // //   const [paypalEmail, setPaypalEmail] = useState('');
// // // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // // //   const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);
// // // // //   const [visibleCardCount, setVisibleCardCount] = useState(2);

// // // // //   useEffect(() => {
// // // // //     const fetchSavedPaymentMethods = async () => {
// // // // //       try {
// // // // //         const response = await axios.get('http://localhost:3000/payment/payments/maaz@gmail.com');
// // // // //         if (response.status === 200) {
// // // // //           setSavedPaymentMethods(response.data);
// // // // //         }
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching saved payment methods:', error);
// // // // //       }
// // // // //     };

// // // // //     fetchSavedPaymentMethods();
// // // // //   }, []);

// // // // //   const handlePayNow = async () => {
// // // // //     const storedEmail = localStorage.getItem('email') || 'N/A';
// // // // //     const paymentData = {
// // // // //       email: storedEmail,
// // // // //       amount: cartTotal,
// // // // //       paymentMethod: paymentMethod,
// // // // //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // // //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // // //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // // //     };

// // // // //     try {
// // // // //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);

// // // // //       if (response.status === 201) {
// // // // //         Swal.fire({
// // // // //           title: 'Payment Successful!',
// // // // //           text: 'Your payment has been processed successfully.',
// // // // //           icon: 'success'
// // // // //         });

// // // // //         generatePDF();
// // // // //         setTimeout(() => {
// // // // //           navigate('/');
// // // // //         }, 1000);

// // // // //         sendEmail({ ...bookingDetails, ...customerDetails });
// // // // //       } else {
// // // // //         Swal.fire({
// // // // //           title: 'Payment Failed',
// // // // //           text: 'Please try again.',
// // // // //           icon: 'error',
// // // // //         });
// // // // //       }
// // // // //     } catch (error) {
// // // // //       Swal.fire({
// // // // //         title: 'Payment Failed',
// // // // //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // // //         icon: 'error',
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const generatePDF = () => {
// // // // //     const doc = new jsPDF();
// // // // //     doc.setFontSize(22);
// // // // //     doc.text('My-Bus', 105, 20, 'center');
// // // // //     doc.setFontSize(18);
// // // // //     doc.text('Ticket details', 105, 35, 'center');

// // // // //     doc.text('Bus Details:', 20, 100);
// // // // //     doc.autoTable({
// // // // //       startY: 105,
// // // // //       head: [['Attribute', 'Value']],
// // // // //       body: [
// // // // //         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
// // // // //         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
// // // // //         ['From', bookingDetails?.from || 'N/A'],
// // // // //         ['To', bookingDetails?.to || 'N/A'],
// // // // //         ['Type', bookingDetails?.bus?.busType || 'N/A'],
// // // // //         ['Fare', `₹ ${fare.toLocaleString()}`],
// // // // //         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
// // // // //         ['Number of Passengers', passengerDetails?.length || '0'],
// // // // //         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
// // // // //       ],
// // // // //       didDrawPage: (data) => {
// // // // //         doc.setFontSize(12);
// // // // //         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
// // // // //       },
// // // // //     });

// // // // //     doc.setFontSize(14);
// // // // //     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
// // // // //     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
// // // // //     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

// // // // //     doc.save('ticket-details.pdf');
// // // // //   };

// // // // //   const sendEmail = async (bookingData) => {
// // // // //     try {
// // // // //       const emailResponse = await fetch('http://localhost:3000/email', {
// // // // //         method: 'POST',
// // // // //         headers: {
// // // // //           'Content-Type': 'application/json',
// // // // //         },
// // // // //         body: JSON.stringify({
// // // // //           recipientEmail: 'maazhgl66@gmail.com',
// // // // //           bookingData: bookingData,
// // // // //         }),
// // // // //       });

// // // // //       if (emailResponse.ok) {
// // // // //         Swal.fire({
// // // // //           title: "Email sent Successfully!",
// // // // //           text: "",
// // // // //           icon: "success"
// // // // //         });
// // // // //       } else {
// // // // //         const emailErrorData = await emailResponse.json();
// // // // //         console.error('Email sending error:', emailErrorData);
// // // // //         Swal.fire({
// // // // //           title: 'Email Sending Failed',
// // // // //           text: `Error: ${emailErrorData.message || 'Unknown error occurred'}`,
// // // // //           icon: 'error',
// // // // //         });
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Error sending email:', error);
// // // // //       Swal.fire({
// // // // //         title: 'Email Sending Failed',
// // // // //         text: `Error: ${error.message}`,
// // // // //         icon: 'error',
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const handleConfirmBooking = () => {
// // // // //     setShowPaymentModal(true);
// // // // //   };

// // // // //   const handleViewMore = () => {
// // // // //     setVisibleCardCount(prevCount => prevCount + 2);
// // // // //   };

// // // // //   return (
// // // // //     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
// // // // //       <div className="mb-4" style={{ textAlign: 'center' }}>
// // // // //         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Enter Email for PDF:</h4>
// // // // //         <input
// // // // //           type="email"
// // // // //           className="form-control"
// // // // //           value={customerEmail}
// // // // //           onChange={(e) => setCustomerEmail(e.target.value)}
// // // // //           placeholder="Enter Email"
// // // // //           style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
// // // // //         />
// // // // //       </div>
// // // // //       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
// // // // //         Payment Details
// // // // //       </h2>

// // // // //       <div className="mb-4">
// // // // //         <h4>Select Payment Method:</h4>
// // // // //         {savedPaymentMethods.length > 0 && (
// // // // //           <div className="mb-4">
// // // // //             <h5>Saved Payment Methods:</h5>
// // // // //             {savedPaymentMethods.slice(0, visibleCardCount).map((method, index) => (
// // // // //               <div key={index} className="mb-2">
// // // // //                 <input
// // // // //                   type="radio"
// // // // //                   id={`savedMethod${index}`}
// // // // //                   name="paymentMethod"
// // // // //                   value={method.type}
// // // // //                   onChange={(e) => {
// // // // //                     setPaymentMethod(e.target.value);
// // // // //                     if (e.target.value === 'Credit Card') {
// // // // //                       setCreditCardDetails(method.details);
// // // // //                     } else if (e.target.value === 'PayPal') {
// // // // //                       setPaypalEmail(method.details.email);
// // // // //                     } else if (e.target.value === 'UPI') {
// // // // //                       setUpiDetails(method.details.upiId);
// // // // //                     }
// // // // //                   }}
// // // // //                 />
// // // // //                 <label htmlFor={`savedMethod${index}`}>{method.type}</label>
// // // // //                 {method.type === 'Credit Card' && (
// // // // //                   <div>
// // // // //                     <p>Card Number: {method.details.cardNumber}</p>
// // // // //                     <p>Card Holder Name: {method.details.cardHolderName}</p>
// // // // //                     <p>Expiry Date: {method.details.expiryDate}</p>
// // // // //                   </div>
// // // // //                 )}
// // // // //                 {method.type === 'UPI' && <p>UPI ID: {method.details.upiId}</p>}
// // // // //                 {method.type === 'PayPal' && <p>PayPal Email: {method.details.email}</p>}
// // // // //               </div>
// // // // //             ))}
// // // // //             {visibleCardCount < savedPaymentMethods.length && (
// // // // //               <button
// // // // //                 className="btn btn-secondary"
// // // // //                 onClick={handleViewMore}
// // // // //                 style={{ backgroundColor: '#ca5252', border: 'none' }}
// // // // //               >
// // // // //                 View More
// // // // //               </button>
// // // // //             )}
// // // // //           </div>
// // // // //         )}

// // // // //         <div>
// // // // //           <input
// // // // //             type="radio"
// // // // //             id="creditCard"
// // // // //             name="paymentMethod"
// // // // //             value="Credit Card"
// // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // //           />
// // // // //           <label htmlFor="creditCard">Credit Card</label>
// // // // //           {paymentMethod === 'Credit Card' && (
// // // // //             <div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 className="form-control"
// // // // //                 placeholder="Card Number"
// // // // //                 value={creditCardDetails.cardNumber}
// // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// // // // //               />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 className="form-control"
// // // // //                 placeholder="Card Holder Name"
// // // // //                 value={creditCardDetails.cardHolderName}
// // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// // // // //               />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 className="form-control"
// // // // //                 placeholder="Expiry Date"
// // // // //                 value={creditCardDetails.expiryDate}
// // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// // // // //               />
// // // // //               <input
// // // // //                 type="text"
// // // // //                 className="form-control"
// // // // //                 placeholder="CVV"
// // // // //                 value={creditCardDetails.cvv}
// // // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// // // // //               />
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         <div>
// // // // //           <input
// // // // //             type="radio"
// // // // //             id="paypal"
// // // // //             name="paymentMethod"
// // // // //             value="PayPal"
// // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // //           />
// // // // //           <label htmlFor="paypal">PayPal</label>
// // // // //           {paymentMethod === 'PayPal' && (
// // // // //             <div>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 className="form-control"
// // // // //                 placeholder="PayPal Email"
// // // // //                 value={paypalEmail}
// // // // //                 onChange={(e) => setPaypalEmail(e.target.value)}
// // // // //               />
// // // // //             </div>
// // // // //           )}
// // // // //         </div>

// // // // //         <div>
// // // // //           <input
// // // // //             type="radio"
// // // // //             id="upi"
// // // // //             name="paymentMethod"
// // // // //             value="UPI"
// // // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // // //           />
// // // // //           <label htmlFor="upi">UPI</label>
// // // // //           {paymentMethod === 'UPI' && (
// // // // //             <div>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 className="form-control"
// // // // //                 placeholder="UPI ID"
// // // // //                 value={upiDetails}
// // // // //                 onChange={(e) => setUpiDetails(e.target.value)}
// // // // //               />
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       <div className="mb-4">
// // // // //         <button
// // // // //           className="btn btn-primary"
// // // // //           onClick={handlePayNow}
// // // // //           style={{ backgroundColor: '#ca5252', border: 'none' }}
// // // // //         >
// // // // //           Confirm Booking
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PaymentModal;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { useLocation, useNavigate } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import Swal from 'sweetalert2';
// // // // import jsPDF from 'jspdf';
// // // // import 'jspdf-autotable';

// // // // const PaymentModal = () => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

// // // //   const fare = bookingDetails?.fare || 0;
// // // //   const cartTotal = bookingDetails?.cartTotal || 0;
// // // //   const discountAmount = bookingDetails?.discountAmount || 0;
// // // //   const GST = bookingDetails?.GST || 0;

// // // //   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
// // // //   const [showPaymentModal, setShowPaymentModal] = useState(false);
// // // //   const [paymentSuccess, setPaymentSuccess] = useState(false);
// // // //   const [creditCardDetails, setCreditCardDetails] = useState({
// // // //     cardNumber: '',
// // // //     cardHolderName: '',
// // // //     expiryDate: '',
// // // //     cvv: '',
// // // //   });
// // // //   const [upiDetails, setUpiDetails] = useState('');
// // // //   const [paypalEmail, setPaypalEmail] = useState('');
// // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // //   const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);
// // // //   const [visibleCardCount, setVisibleCardCount] = useState(2);

// // // //   useEffect(() => {
// // // //     const fetchSavedPaymentMethods = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:3000/payment/payments/maaz@gmail.com');
// // // //         if (response.status === 200) {
// // // //           setSavedPaymentMethods(response.data);
// // // //         }
// // // //       } catch (error) {
// // // //         console.error('Error fetching saved payment methods:', error);
// // // //       }
// // // //     };

// // // //     fetchSavedPaymentMethods();
// // // //   }, []);

// // // //   const handlePayNow = async () => {
// // // //     const storedEmail = localStorage.getItem('email') || 'N/A';
// // // //     const paymentData = {
// // // //       email: storedEmail,
// // // //       amount: cartTotal,
// // // //       paymentMethod: paymentMethod,
// // // //       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
// // // //       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
// // // //       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
// // // //     };

// // // //     try {
// // // //       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);

// // // //       if (response.status === 201) {
// // // //         Swal.fire({
// // // //           title: 'Payment Successful!',
// // // //           text: 'Your payment has been processed successfully.',
// // // //           icon: 'success'
// // // //         });

// // // //         generatePDF();
// // // //         setTimeout(() => {
// // // //           navigate('/');
// // // //         }, 1000);

// // // //         sendEmail({ ...bookingDetails, ...customerDetails });
// // // //       } else {
// // // //         Swal.fire({
// // // //           title: 'Payment Failed',
// // // //           text: 'Please try again.',
// // // //           icon: 'error',
// // // //         });
// // // //       }
// // // //     } catch (error) {
// // // //       Swal.fire({
// // // //         title: 'Payment Failed',
// // // //         text: `Error: ${error.response ? error.response.data.details : error.message}`,
// // // //         icon: 'error',
// // // //       });
// // // //     }
// // // //   };

// // // //   const generatePDF = () => {
// // // //     const doc = new jsPDF();
// // // //     doc.setFontSize(22);
// // // //     doc.text('My-Bus', 105, 20, 'center');
// // // //     doc.setFontSize(18);
// // // //     doc.text('Ticket details', 105, 35, 'center');

// // // //     doc.text('Bus Details:', 20, 100);
// // // //     doc.autoTable({
// // // //       startY: 105,
// // // //       head: [['Attribute', 'Value']],
// // // //       body: [
// // // //         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
// // // //         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
// // // //         ['From', bookingDetails?.from || 'N/A'],
// // // //         ['To', bookingDetails?.to || 'N/A'],
// // // //         ['Type', bookingDetails?.bus?.busType || 'N/A'],
// // // //         ['Fare', `₹ ${fare.toLocaleString()}`],
// // // //         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
// // // //         ['Number of Passengers', passengerDetails?.length || '0'],
// // // //         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
// // // //       ],
// // // //       didDrawPage: (data) => {
// // // //         doc.setFontSize(12);
// // // //         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
// // // //       },
// // // //     });

// // // //     doc.setFontSize(14);
// // // //     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
// // // //     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
// // // //     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

// // // //     doc.save('ticket-details.pdf');
// // // //   };

// // // //   const sendEmail = async (bookingData) => {
// // // //     try {
// // // //       const emailResponse = await fetch('http://localhost:3000/email', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           recipientEmail: 'maazhgl66@gmail.com',
// // // //           bookingData: bookingData,
// // // //         }),
// // // //       });

// // // //       if (emailResponse.ok) {
// // // //         Swal.fire({
// // // //           title: "Email sent Successfully!",
// // // //           text: "",
// // // //           icon: "success"
// // // //         });
// // // //       } else {
// // // //         const emailErrorData = await emailResponse.json();
// // // //         console.error('Email sending error:', emailErrorData);
// // // //         Swal.fire({
// // // //           title: 'Email Sending Failed',
// // // //           text: `Error: ${emailErrorData.message || 'Unknown error occurred'}`,
// // // //           icon: 'error',
// // // //         });
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error sending email:', error);
// // // //       Swal.fire({
// // // //         title: 'Email Sending Failed',
// // // //         text: `Error: ${error.message}`,
// // // //         icon: 'error',
// // // //       });
// // // //     }
// // // //   };

// // // //   const handleConfirmBooking = () => {
// // // //     setShowPaymentModal(true);
// // // //   };

// // // //   const handleViewMore = () => {
// // // //     setVisibleCardCount(prevCount => prevCount + 2);
// // // //   };

// // // //   return (
// // // //     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
// // // //       <div className="mb-4" style={{ textAlign: 'center' }}>
// // // //         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Enter Email for PDF:</h4>
// // // //         <input
// // // //           type="email"
// // // //           className="form-control"
// // // //           value={customerEmail}
// // // //           onChange={(e) => setCustomerEmail(e.target.value)}
// // // //           placeholder="Enter Email"
// // // //           style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
// // // //         />
// // // //       </div>
// // // //       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
// // // //         Payment Details
// // // //       </h2>

// // // //       <div className="mb-4">
// // // //         <h4>Select Payment Method:</h4>
// // // //         {savedPaymentMethods.length > 0 && (
// // // //           <div className="mb-4">
// // // //             <h5>Saved Payment Methods:</h5>
// // // //             {savedPaymentMethods.slice(0, visibleCardCount).map((method, index) => (
// // // //               <div key={index} className="mb-3" style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
// // // //                 <input
// // // //                   type="radio"
// // // //                   id={`savedMethod${index}`}
// // // //                   name="paymentMethod"
// // // //                   value={method.type}
// // // //                   onChange={(e) => {
// // // //                     setPaymentMethod(e.target.value);
// // // //                     if (e.target.value === 'Credit Card') {
// // // //                       setCreditCardDetails(method.details);
// // // //                     } else if (e.target.value === 'PayPal') {
// // // //                       setPaypalEmail(method.details.email);
// // // //                     } else if (e.target.value === 'UPI') {
// // // //                       setUpiDetails(method.details.upiId);
// // // //                     }
// // // //                   }}
// // // //                   style={{ marginRight: '10px' }}
// // // //                 />
// // // //                 <label htmlFor={`savedMethod${index}`} style={{ fontWeight: 'bold' }}>{method.type}</label>
// // // //                 {method.type === 'Credit Card' && (
// // // //                   <div>
// // // //                     <p><strong>Card Number:</strong> {method.details.cardNumber}</p>
// // // //                     <p><strong>Card Holder Name:</strong> {method.details.cardHolderName}</p>
// // // //                     <p><strong>Expiry Date:</strong> {method.details.expiryDate}</p>
// // // //                   </div>
// // // //                 )}
// // // //                 {method.type === 'UPI' && <p><strong>UPI ID:</strong> {method.details.upiId}</p>}
// // // //                 {method.type === 'PayPal' && <p><strong>PayPal Email:</strong> {method.details.email}</p>}
// // // //               </div>
// // // //             ))}
// // // //             {savedPaymentMethods.length > visibleCardCount && (
// // // //               <button
// // // //                 onClick={handleViewMore}
// // // //                 style={{ backgroundColor: '#ca5252', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '5px' }}
// // // //               >
// // // //                 View More
// // // //               </button>
// // // //             )}
// // // //           </div>
// // // //         )}

// // // //         <div className="mt-4">
// // // //           <input
// // // //             type="radio"
// // // //             id="creditCard"
// // // //             name="paymentMethod"
// // // //             value="Credit Card"
// // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // //           />
// // // //           <label htmlFor="creditCard">Credit Card</label>
// // // //           {paymentMethod === 'Credit Card' && (
// // // //             <div>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Card Number"
// // // //                 value={creditCardDetails.cardNumber}
// // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Card Holder Name"
// // // //                 value={creditCardDetails.cardHolderName}
// // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="Expiry Date"
// // // //                 value={creditCardDetails.expiryDate}
// // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// // // //               />
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="CVV"
// // // //                 value={creditCardDetails.cvv}
// // // //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// // // //               />
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div className="mt-4">
// // // //           <input
// // // //             type="radio"
// // // //             id="paypal"
// // // //             name="paymentMethod"
// // // //             value="PayPal"
// // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // //           />
// // // //           <label htmlFor="paypal">PayPal</label>
// // // //           {paymentMethod === 'PayPal' && (
// // // //             <div>
// // // //               <input
// // // //                 type="email"
// // // //                 className="form-control"
// // // //                 placeholder="PayPal Email"
// // // //                 value={paypalEmail}
// // // //                 onChange={(e) => setPaypalEmail(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div className="mt-4">
// // // //           <input
// // // //             type="radio"
// // // //             id="upi"
// // // //             name="paymentMethod"
// // // //             value="UPI"
// // // //             onChange={(e) => setPaymentMethod(e.target.value)}
// // // //           />
// // // //           <label htmlFor="upi">UPI</label>
// // // //           {paymentMethod === 'UPI' && (
// // // //             <div>
// // // //               <input
// // // //                 type="text"
// // // //                 className="form-control"
// // // //                 placeholder="UPI ID"
// // // //                 value={upiDetails}
// // // //                 onChange={(e) => setUpiDetails(e.target.value)}
// // // //               />
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       <div className="mb-4">
// // // //         <button
// // // //           className="btn btn-primary"
// // // //           onClick={handlePayNow}
// // // //           style={{ backgroundColor: '#ca5252', border: 'none', color: 'white', padding: '10px 20px', borderRadius: '5px' }}
// // // //         >
// // // //           Confirm Booking
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PaymentModal;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const PaymentModal = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

//   const fare = bookingDetails?.fare || 0;
//   const cartTotal = bookingDetails?.cartTotal || 0;
//   const discountAmount = bookingDetails?.discountAmount || 0;
//   const GST = bookingDetails?.GST || 0;

//   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [creditCardDetails, setCreditCardDetails] = useState({
//     cardNumber: '',
//     cardHolderName: '',
//     expiryDate: '',
//     cvv: '',
//   });
//   const [upiDetails, setUpiDetails] = useState('');
//   const [paypalEmail, setPaypalEmail] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);
//   const [visibleCardCount, setVisibleCardCount] = useState(2);

//   useEffect(() => {
//     const fetchSavedPaymentMethods = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/payment/payments/maaz@gmail.com');
//         if (response.status === 200) {
//           setSavedPaymentMethods(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching saved payment methods:', error);
//       }
//     };

//     fetchSavedPaymentMethods();
//   }, []);

//   const handlePayNow = async () => {
//     const storedEmail = localStorage.getItem('email') || 'N/A';
//     const paymentData = {
//       email: storedEmail,
//       amount: cartTotal,
//       paymentMethod: paymentMethod,
//       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
//       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
//       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
//     };

//     try {
//       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);

//       if (response.status === 201) {
//         Swal.fire({
//           title: 'Payment Successful!',
//           text: 'Your payment has been processed successfully.',
//           icon: 'success'
//         });

//         generatePDF();
//         setTimeout(() => {
//           navigate('/');
//         }, 1000);

//         sendEmail({ ...bookingDetails, ...customerDetails });
//       } else {
//         Swal.fire({
//           title: 'Payment Failed',
//           text: 'Please try again.',
//           icon: 'error',
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Payment Failed',
//         text: `Error: ${error.response ? error.response.data.details : error.message}`,
//         icon: 'error',
//       });
//     }
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(22);
//     doc.text('My-Bus', 105, 20, 'center');
//     doc.setFontSize(18);
//     doc.text('Ticket details', 105, 35, 'center');

//     doc.text('Bus Details:', 20, 100);
//     doc.autoTable({
//       startY: 105,
//       head: [['Attribute', 'Value']],
//       body: [
//         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
//         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
//         ['From', bookingDetails?.from || 'N/A'],
//         ['To', bookingDetails?.to || 'N/A'],
//         ['Type', bookingDetails?.bus?.busType || 'N/A'],
//         ['Fare', `₹ ${fare.toLocaleString()}`],
//         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
//         ['Number of Passengers', passengerDetails?.length || '0'],
//         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
//       ],
//       didDrawPage: (data) => {
//         doc.setFontSize(12);
//         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
//       },
//     });

//     doc.setFontSize(14);
//     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
//     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
//     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

//     doc.save('ticket-details.pdf');
//   };

//   const sendEmail = async (bookingData) => {
//     try {
//       const emailResponse = await fetch('http://localhost:3000/email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           recipientEmail: 'maazhgl66@gmail.com',
//           bookingData: bookingData,
//         }),
//       });

//       if (emailResponse.ok) {
//         Swal.fire({
//           title: "Email sent Successfully!",
//           text: "",
//           icon: "success"
//         });
//       } else {
//         const emailErrorData = await emailResponse.json();
//         console.error('Email sending error:', emailErrorData);
//         Swal.fire({
//           title: 'Email Sending Failed',
//           text: `Error: ${emailErrorData.message || 'Unknown error occurred'}`,
//           icon: 'error',
//         });
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       Swal.fire({
//         title: 'Email Sending Failed',
//         text: `Error: ${error.message}`,
//         icon: 'error',
//       });
//     }
//   };

//   const handleConfirmBooking = () => {
//     setShowPaymentModal(true);
//   };

//   const handleViewMore = () => {
//     setVisibleCardCount(prevCount => prevCount + 2);
//   };

//   return (
//     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
//       <div className="mb-4" style={{ textAlign: 'center' }}>
//         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Enter Email for PDF:</h4>
//         <input
//           type="email"
//           className="form-control"
//           value={customerEmail}
//           onChange={(e) => setCustomerEmail(e.target.value)}
//           placeholder="Enter Email"
//           style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
//         />
//       </div>
//       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
//         Payment Details
//       </h2>

//       <div className="mb-4">
//         <h4>Select Payment Method:</h4>
//         {savedPaymentMethods.length > 0 && (
//           <div className="mb-4">
//             <h5>Saved Payment Methods:</h5>
//             {savedPaymentMethods.slice(0, visibleCardCount).map((method, index) => (
//               <div key={index} className="mb-3" style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
//                 <input
//                   type="radio"
//                   id={`savedMethod${index}`}
//                   name="paymentMethod"
//                   value={method.paymentMethod}
//                   onChange={(e) => {
//                     setPaymentMethod(e.target.value);
//                     if (e.target.value === 'Credit Card') {
//                       setCreditCardDetails(method.creditCardDetails);
//                     } else if (e.target.value === 'PayPal') {
//                       setPaypalEmail(method.paypalEmail);
//                     } else if (e.target.value === 'UPI') {
//                       setUpiDetails(method.upiDetails);
//                     }
//                   }}
//                   style={{ marginRight: '10px' }}
//                 />
//                 <label htmlFor={`savedMethod${index}`} style={{ fontWeight: 'bold' }}>{method.paymentMethod}</label>
//                 {method.paymentMethod === 'Credit Card' && (
//                   <div>
//                     <p><strong>Card Number:</strong> {method.creditCardDetails.cardNumber}</p>
//                     <p><strong>Card Holder Name:</strong> {method.creditCardDetails.cardHolderName}</p>
//                     <p><strong>Expiry Date:</strong> {method.creditCardDetails.expiryDate}</p>
//                   </div>
//                 )}
//                 {method.paymentMethod === 'PayPal' && (
//                   <div>
//                     <p><strong>PayPal Email:</strong> {method.paypalEmail}</p>
//                   </div>
//                 )}
//                 {method.paymentMethod === 'UPI' && (
//                   <div>
//                     <p><strong>UPI Details:</strong> {method.upiDetails}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//             {/* {savedPaymentMethods.length > visibleCardCount && (
//               // <button className="btn btn-secondary" onClick={handleViewMore}>View More</button>
//             )} */}
//           </div>
//         )}
//         <div>
//           <input
//             type="radio"
//             id="creditCard"
//             name="paymentMethod"
//             value="Credit Card"
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginRight: '10px' }}
//           />
//           <label htmlFor="creditCard" style={{ fontWeight: 'bold' }}>Credit Card</label>
//           {paymentMethod === 'Credit Card' && (
//             <div>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Card Number"
//                 value={creditCardDetails.cardNumber}
//                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
// //               />
// //               <input
// //                 type="text"
// //                 className="form-control mb-2"
// //                 placeholder="Card Holder Name"
// //                 value={creditCardDetails.cardHolderName}
// //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
// //               />
// //               <input
// //                 type="text"
// //                 className="form-control mb-2"
// //                 placeholder="Expiry Date (MM/YY)"
// //                 value={creditCardDetails.expiryDate}
// //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
// //               />
// //               <input
// //                 type="text"
// //                 className="form-control mb-2"
// //                 placeholder="CVV"
// //                 value={creditCardDetails.cvv}
// //                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
// //               />
// //             </div>
// //           )}
// //         </div>
// //         <div>
// //           <input
// //             type="radio"
// //             id="paypal"
// //             name="paymentMethod"
// //             value="PayPal"
// //             onChange={(e) => setPaymentMethod(e.target.value)}
// //             style={{ marginRight: '10px' }}
// //           />
// //           <label htmlFor="paypal" style={{ fontWeight: 'bold' }}>PayPal</label>
// //           {paymentMethod === 'PayPal' && (
// //             <div>
// //               <input
// //                 type="email"
// //                 className="form-control mb-2"
// //                 placeholder="PayPal Email"
// //                 value={paypalEmail}
// //                 onChange={(e) => setPaypalEmail(e.target.value)}
// //               />
// //             </div>
// //           )}
// //         </div>
// //         <div>
// //           <input
// //             type="radio"
// //             id="upi"
// //             name="paymentMethod"
// //             value="UPI"
// //             onChange={(e) => setPaymentMethod(e.target.value)}
// //             style={{ marginRight: '10px' }}
// //           />
// //           <label htmlFor="upi" style={{ fontWeight: 'bold' }}>UPI</label>
// //           {paymentMethod === 'UPI' && (
// //             <div>
// //               <input
// //                 type="text"
// //                 className="form-control mb-2"
// //                 placeholder="UPI Details"
// //                 value={upiDetails}
// //                 onChange={(e) => setUpiDetails(e.target.value)}
// //               />
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //       <div className="text-center">
// //         <button
// //           className="btn btn-primary"
// //           onClick={handlePayNow}
// //           disabled={!paymentMethod}
// //           style={{ backgroundColor: '#ca5252', borderColor: '#ca5252' }}
// //         >
// //           Pay Now
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PaymentModal;

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const PaymentModal = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

//   const fare = bookingDetails?.fare || 0;
//   const cartTotal = bookingDetails?.cartTotal || 0;
//   const discountAmount = bookingDetails?.discountAmount || 0;
//   const GST = bookingDetails?.GST || 0;

//   const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [creditCardDetails, setCreditCardDetails] = useState({
//     cardNumber: '',
//     cardHolderName: '',
//     expiryDate: '',
//     cvv: '',
//   });
//   const [upiDetails, setUpiDetails] = useState('');
//   const [paypalEmail, setPaypalEmail] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);
//   const [visibleCardCount, setVisibleCardCount] = useState(2); // Initial visible count

//   useEffect(() => {
//     const fetchSavedPaymentMethods = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/payment/payments/maaz@gmail.com');
//         if (response.status === 200) {
//           setSavedPaymentMethods(response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching saved payment methods:', error);
//       }
//     };

//     fetchSavedPaymentMethods();
//   }, []);

//   const handlePayNow = async () => {
//     const storedEmail = localStorage.getItem('email') || 'N/A';
//     const paymentData = {
//       email: storedEmail,
//       amount: cartTotal,
//       paymentMethod: paymentMethod,
//       creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
//       paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
//       upiDetails: paymentMethod === 'UPI' ? upiDetails : null
//     };

//     try {
//       const response = await axios.post('http://localhost:3000/payment/payments', paymentData);

//       if (response.status === 201) {
//         Swal.fire({
//           title: 'Payment Successful!',
//           text: 'Your payment has been processed successfully.',
//           icon: 'success'
//         });

//         generatePDF();
//         setTimeout(() => {
//           navigate('/');
//         }, 1000);

//         sendEmail({ ...bookingDetails, ...customerDetails });
//       } else {
//         Swal.fire({
//           title: 'Payment Failed',
//           text: 'Please try again.',
//           icon: 'error',
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Payment Failed',
//         text: `Error: ${error.response ? error.response.data.details : error.message}`,
//         icon: 'error',
//       });
//     }
//   };

//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(22);
//     doc.text('My-Bus', 105, 20, 'center');
//     doc.setFontSize(18);
//     doc.text('Ticket details', 105, 35, 'center');

//     doc.text('Bus Details:', 20, 100);
//     doc.autoTable({
//       startY: 105,
//       head: [['Attribute', 'Value']],
//       body: [
//         ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
//         ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
//         ['From', bookingDetails?.from || 'N/A'],
//         ['To', bookingDetails?.to || 'N/A'],
//         ['Type', bookingDetails?.bus?.busType || 'N/A'],
//         ['Fare', `₹ ${fare.toLocaleString()}`],
//         ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
//         ['Number of Passengers', passengerDetails?.length || '0'],
//         ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
//       ],
//       didDrawPage: (data) => {
//         doc.setFontSize(12);
//         doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
//       },
//     });

//     doc.setFontSize(14);
//     doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
//     doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
//     doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

//     doc.save('ticket-details.pdf');
//   };

//   const sendEmail = async (bookingData) => {
//     try {
//       const emailResponse = await fetch('http://localhost:3000/email', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           recipientEmail: 'maazhgl66@gmail.com',
//           bookingData: bookingData,
//         }),
//       });

//       if (emailResponse.ok) {
//         Swal.fire({
//           title: "Email sent Successfully!",
//           text: "",
//           icon: "success"
//         });
//       } else {
//         const emailErrorData = await emailResponse.json();
//         console.error('Email sending error:', emailErrorData);
//         Swal.fire({
//           title: 'Email Sending Failed',
//           text: `Error: ${emailErrorData.message || 'Unknown error occurred'}`,
//           icon: 'error',
//         });
//       }
//     } catch (error) {
//       console.error('Error sending email:', error);
//       Swal.fire({
//         title: 'Email Sending Failed',
//         text: `Error: ${error.message}`,
//         icon: 'error',
//       });
//     }
//   };

//   const handleConfirmBooking = () => {
//     setShowPaymentModal(true);
//   };

//   const handleViewMore = () => {
//     setVisibleCardCount(savedPaymentMethods.length); // Show all payment methods
//   };

//   return (
//     <div className="container" style={{ maxWidth: '600px', margin: 'auto' }}>
//       <div className="mb-4" style={{ textAlign: 'center' }}>
//         <h4 style={{ color: '#ca5252', fontWeight: 'bold' }}>Enter Email for PDF:</h4>
//         <input
//           type="email"
//           className="form-control"
//           value={customerEmail}
//           onChange={(e) => setCustomerEmail(e.target.value)}
//           placeholder="Enter Email"
//           style={{ backgroundColor: 'transparent', border: '2px solid #ca5252', color: 'grey', fontWeight: 'bold' }}
//         />
//       </div>
//       <h2 className="mt-4 mb-4" style={{ textAlign: 'center', color: '#ca5252', fontWeight: 'bold' }}>
//         Payment Details
//       </h2>

//       <div className="mb-4">
//         <h4>Select Payment Method:</h4>
//         {savedPaymentMethods.length > 0 && (
//           <div className="mb-4">
//             <h5>Saved Payment Methods:</h5>
//             {savedPaymentMethods.slice(0, visibleCardCount).map((method, index) => (
//               <div key={index} className="mb-3" style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
//                 <input
//                   type="radio"
//                   id={`savedMethod${index}`}
//                   name="paymentMethod"
//                   value={method.paymentMethod}
//                   onChange={(e) => {
//                     setPaymentMethod(e.target.value);
//                     if (e.target.value === 'Credit Card') {
//                       setCreditCardDetails(method.creditCardDetails);
//                     } else if (e.target.value === 'PayPal') {
//                       setPaypalEmail(method.paypalEmail);
//                     } else if (e.target.value === 'UPI') {
//                       setUpiDetails(method.upiDetails);
//                     }
//                   }}
//                   style={{ marginRight: '10px' }}
//                 />
//                 <label htmlFor={`savedMethod${index}`} style={{ fontWeight: 'bold' }}>{method.paymentMethod}</label>
//                 {method.paymentMethod === 'Credit Card' && (
//                   <div>
//                     <p><strong>Card Number:</strong> {method.creditCardDetails.cardNumber}</p>
//                     <p><strong>Card Holder Name:</strong> {method.creditCardDetails.cardHolderName}</p>
//                     <p><strong>Expiry Date:</strong> {method.creditCardDetails.expiryDate}</p>
//                   </div>
//                 )}
//                 {method.paymentMethod === 'PayPal' && (
//                   <div>
//                     <p><strong>PayPal Email:</strong> {method.paypalEmail}</p>
//                   </div>
//                 )}
//                 {method.paymentMethod === 'UPI' && (
//                   <div>
//                     <p><strong>UPI Details:</strong> {method.upiDetails}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//             {savedPaymentMethods.length > visibleCardCount && (
//               <button className="btn btn-secondary" onClick={handleViewMore}>View More</button>
//             )}
//           </div>
//         )}
//         <div>
//           <input
//             type="radio"
//             id="creditCard"
//             name="paymentMethod"
//             value="Credit Card"
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginRight: '10px' }}
//           />
//           <label htmlFor="creditCard" style={{ fontWeight: 'bold' }}>Credit Card</label>
//           {paymentMethod === 'Credit Card' && (
//             <div>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Card Number"
//                 value={creditCardDetails.cardNumber}
//                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
//               />
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Card Holder Name"
//                 value={creditCardDetails.cardHolderName}
//                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
//               />
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="Expiry Date (MM/YY)"
//                 value={creditCardDetails.expiryDate}
//                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
//               />
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="CVV"
//                 value={creditCardDetails.cvv}
//                 onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
//               />
//             </div>
//           )}
//         </div>
//         <div>
//           <input
//             type="radio"
//             id="paypal"
//             name="paymentMethod"
//             value="PayPal"
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginRight: '10px' }}
//           />
//           <label htmlFor="paypal" style={{ fontWeight: 'bold' }}>PayPal</label>
//           {paymentMethod === 'PayPal' && (
//             <div>
//               <input
//                 type="email"
//                 className="form-control mb-2"
//                 placeholder="PayPal Email"
//                 value={paypalEmail}
//                 onChange={(e) => setPaypalEmail(e.target.value)}
//               />
//             </div>
//           )}
//         </div>
//         <div>
//           <input
//             type="radio"
//             id="upi"
//             name="paymentMethod"
//             value="UPI"
//             onChange={(e) => setPaymentMethod(e.target.value)}
//             style={{ marginRight: '10px' }}
//           />
//           <label htmlFor="upi" style={{ fontWeight: 'bold' }}>UPI</label>
//           {paymentMethod === 'UPI' && (
//             <div>
//               <input
//                 type="text"
//                 className="form-control mb-2"
//                 placeholder="UPI Details"
//                 value={upiDetails}
//                 onChange={(e) => setUpiDetails(e.target.value)}
//               />
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="text-center">
//         <button
//           className="btn btn-primary"
//           onClick={handlePayNow}
//           disabled={!paymentMethod}
//           style={{ backgroundColor: '#ca5252', borderColor: '#ca5252' }}
//         >
//           Pay Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentModal;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PaymentModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails, customerDetails, passengerDetails } = location.state || {};

  const fare = bookingDetails?.fare || 0;
  const cartTotal = bookingDetails?.cartTotal || 0;
  const discountAmount = bookingDetails?.discountAmount || 0;
  const GST = bookingDetails?.GST || 0;

  const [customerEmail, setCustomerEmail] = useState(customerDetails?.email || '');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [creditCardDetails, setCreditCardDetails] = useState({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
  });
  const [upiDetails, setUpiDetails] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [savedPaymentMethods, setSavedPaymentMethods] = useState([]);
  const [visibleCardCount, setVisibleCardCount] = useState(2); // Initial visible count

  useEffect(() => {
    const fetchSavedPaymentMethods = async () => {
      try {
        const response = await axios.get('http://localhost:3000/payment/payments/maaz@gmail.com');
        if (response.status === 200) {
          setSavedPaymentMethods(response.data);
        }
      } catch (error) {
        console.error('Error fetching saved payment methods:', error);
      }
    };

    fetchSavedPaymentMethods();
  }, []);

  const handlePayNow = async () => {
    const storedEmail = localStorage.getItem('email') || 'N/A';
    const paymentData = {
      email: storedEmail,
      amount: cartTotal,
      paymentMethod: paymentMethod,
      creditCardDetails: paymentMethod === 'Credit Card' ? creditCardDetails : null,
      paypalEmail: paymentMethod === 'PayPal' ? paypalEmail : null,
      upiDetails: paymentMethod === 'UPI' ? upiDetails : null
    };

    try {
      const response = await axios.post('http://localhost:3000/payment/payments', paymentData);

      if (response.status === 201) {
        Swal.fire({
          title: 'Payment Successful!',
          text: 'Your payment has been processed successfully.',
          icon: 'success'
        });

        generatePDF();
        setTimeout(() => {
          navigate('/');
        }, 1000);

        sendEmail({ ...bookingDetails, ...customerDetails });
      } else {
        Swal.fire({
          title: 'Payment Failed',
          text: 'Please try again.',
          icon: 'error',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Payment Failed',
        text: `Error: ${error.response ? error.response.data.details : error.message}`,
        icon: 'error',
      });
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text('My-Bus', 105, 20, 'center');
    doc.setFontSize(18);
    doc.text('Ticket details', 105, 35, 'center');

    doc.text('Bus Details:', 20, 100);
    doc.autoTable({
      startY: 105,
      head: [['Attribute', 'Value']],
      body: [
        ['Bus Name', bookingDetails?.bus?.busName || 'N/A'],
        ['Bus Number', bookingDetails?.bus?.busNumber || 'N/A'],
        ['From', bookingDetails?.from || 'N/A'],
        ['To', bookingDetails?.to || 'N/A'],
        ['Type', bookingDetails?.bus?.busType || 'N/A'],
        ['Fare', `₹ ${fare.toLocaleString()}`],
        ['Selected Seats', bookingDetails?.selectedSeats?.join(', ') || 'N/A'],
        ['Number of Passengers', passengerDetails?.length || '0'],
        ['Booking Date', new Date(bookingDetails?.bookingDate || Date.now()).toLocaleDateString()],
      ],
      didDrawPage: (data) => {
        doc.setFontSize(12);
        doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
      },
    });

    doc.setFontSize(14);
    doc.text(`Discount: ₹ ${discountAmount.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 20);
    doc.text(`GST (5%): ₹ ${GST.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 40);
    doc.text(`Total: ₹ ${cartTotal.toLocaleString()}`, 20, doc.autoTable.previous.finalY + 60);

    doc.save('ticket-details.pdf');
  };

  const sendEmail = async (bookingData) => {
    try {
      const emailResponse = await fetch('http://localhost:3000/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientEmail: 'maazhgl66@gmail.com',
          bookingData: bookingData,
        }),
      });

      if (emailResponse.ok) {
        Swal.fire({
          title: "Email sent Successfully!",
          text: "",
          icon: "success"
        });
      } else {
        const emailErrorData = await emailResponse.json();
        console.error('Email sending error:', emailErrorData);
        Swal.fire({
          title: 'Email Sending Failed',
          text: `Error: ${emailErrorData.message || 'Unknown error occurred'}`,
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      Swal.fire({
        title: 'Email Sending Failed',
        text: `Error: ${error.message}`,
        icon: 'error',
      });
    }
  };

  const handleConfirmBooking = () => {
    setShowPaymentModal(true);
  };

  const handleViewMore = () => {
    setVisibleCardCount(savedPaymentMethods.length); // Show all payment methods
  };

  const handleViewLess = () => {
    setVisibleCardCount(2); // Show only 2 payment methods
  };
  
  return (
    <div className="container" style={{ right:'30px',maxWidth: '1000px', margin: 'auto', display: 'flex', gap: '20px', padding: '20px' }}>
      
      {/* Payment Details Form */}
      <div style={{ flex: '1', border: '2px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', backgroundColor: '#f9f9f9' }}>
        <h4 style={{ color: '#ca5252', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Enter Email for PDF:</h4>
        <input
          type="email"
          className="form-control"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          placeholder="Enter Email"
          style={{ width: '100%', padding: '10px', marginBottom: '20px', backgroundColor: 'transparent', border: '2px solid #ccc', borderRadius: '5px', color: 'grey', fontWeight: 'bold' }}
        />

        <h2 style={{ color: '#ca5252', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Payment Details</h2>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Credit Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ marginRight: '10px', accentColor: '#ca5252' }}
          />
          <label htmlFor="creditCard" style={{ fontWeight: 'bold', fontSize: '16px' }}>Credit Card</label>
          {paymentMethod === 'Credit Card' && (
            <div style={{ marginTop: '10px' }}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Card Number"
                value={creditCardDetails.cardNumber}
                onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardNumber: e.target.value })}
                style={{ width: '100%', color:'black',padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px',backgroundColor:'transparent' }}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Card Holder Name"
                value={creditCardDetails.cardHolderName}
                onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cardHolderName: e.target.value })}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px',color:'black',backgroundColor:'transparent' }}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Expiry Date (MM/YY)"
                value={creditCardDetails.expiryDate}
                onChange={(e) => setCreditCardDetails({ ...creditCardDetails, expiryDate: e.target.value })}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' ,color:'black',backgroundColor:'transparent'}}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="CVV"
                value={creditCardDetails.cvv}
                onChange={(e) => setCreditCardDetails({ ...creditCardDetails, cvv: e.target.value })}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' ,color:'black',backgroundColor:'transparent'}}
              />
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="PayPal"
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ marginRight: '10px', accentColor: '#ca5252' }}
          />
          <label htmlFor="paypal" style={{ fontWeight: 'bold', fontSize: '16px' }}>PayPal</label>
          {paymentMethod === 'PayPal' && (
            <div style={{ marginTop: '10px' }}>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="PayPal Email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px',color:'black',backgroundColor:'transparent' }}
              />
            </div>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="UPI"
            onChange={(e) => setPaymentMethod(e.target.value)}
            style={{ marginRight: '10px', accentColor: '#ca5252' }}
          />
          <label htmlFor="upi" style={{ fontWeight: 'bold', fontSize: '16px' }}>UPI</label>
          {paymentMethod === 'UPI' && (
            <div style={{ marginTop: '10px' }}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="UPI Details"
                value={upiDetails}
                onChange={(e) => setUpiDetails(e.target.value)}
                style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px',color:'black',backgroundColor:'transparent' }}
              />
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            className="btn btn-primary"
            onClick={handlePayNow}
            disabled={!paymentMethod}
            style={{ backgroundColor: '#ca5252', borderColor: '#ca5252', padding: '10px 20px', color: '#fff', borderRadius: '5px', border: 'none' }}
          >
            Pay Now
          </button>
        </div>
      </div>

      {/* Saved Payment Methods Form */}
      <div style={{ flex: '1', border: '2px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.2)', backgroundColor: '#f9f9f9' }}>
        <h4 style={{ color: '#ca5252', fontWeight: 'bold', marginBottom: '20px' }}>Saved Payment Methods:</h4>
        {savedPaymentMethods.slice(0, visibleCardCount).map((method, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginBottom: '15px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <input
              type="radio"
              id={`savedMethod${index}`}
              name="savedPaymentMethod"
              value={method.paymentMethod}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                if (e.target.value === 'Credit Card') {
                  setCreditCardDetails(method.creditCardDetails);
                } else if (e.target.value === 'PayPal') {
                  setPaypalEmail(method.paypalEmail);
                } else if (e.target.value === 'UPI') {
                  setUpiDetails(method.upiDetails);
                }
              }}
              style={{ marginRight: '10px', accentColor: '#ca5252' }}
            />
            <label htmlFor={`savedMethod${index}`} style={{ fontWeight: 'bold', fontSize: '16px',color:'#ca5252' }}>{method.paymentMethod}</label>
            {method.paymentMethod === 'Credit Card' && (
              <div style={{ marginTop: '10px' }}>
                <p style={{ margin: '5px 0' }}><strong>Card Number:</strong> {method.creditCardDetails.cardNumber}</p>
                <p style={{ margin: '5px 0' }}><strong>Card Holder Name:</strong> {method.creditCardDetails.cardHolderName}</p>
                <p style={{ margin: '5px 0' }}><strong>Expiry Date:</strong> {method.creditCardDetails.expiryDate}</p>
              </div>
            )}
            {method.paymentMethod === 'PayPal' && (
              <div style={{ marginTop: '10px' }}>
                <p style={{ margin: '5px 0' }}><strong>PayPal Email:</strong> {method.paypalEmail}</p>
              </div>
            )}
            {method.paymentMethod === 'UPI' && (
              <div style={{ marginTop: '10px' }}>
                <p style={{ margin: '5px 0' }}><strong>UPI Details:</strong> {method.upiDetails}</p>
              </div>
            )}
          </div>
        ))}
        {savedPaymentMethods.length > 2 && (
          <button
            className="btn btn-secondary"
            onClick={visibleCardCount === 2 ? handleViewMore : handleViewLess}
            style={{ display: 'block', margin: '10px auto', padding: '10px 20px', border: '2px solid black', borderRadius: '5px', backgroundColor: '#ca5252' }}
          >
            {visibleCardCount === 2 ? 'View More' : 'View Less'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;