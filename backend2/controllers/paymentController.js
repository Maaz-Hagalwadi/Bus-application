const { Payment } = require('../db/PaymentModal');

// const createPayment = async (req, res) => {
//   const { bookingId, amount, paymentMethod, creditCardDetails, paypalEmail, upiDetails } = req.body;
  
//   try {
//     const payment = await Payment.create({
//       bookingId,
//       amount,
//       paymentMethod,
//       creditCardDetails,
//       paypalEmail,
//       upiDetails
//     });
//     res.status(201).json(payment);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create payment', details: error.message });
//   }
// };
const createPayment = async (req, res) => {
    const { bookingId,email, amount, paymentMethod, creditCardDetails, paypalEmail, upiDetails } = req.body;
    
    try {
      const payment = await Payment.create({
        bookingId,
        email,
        amount,
        paymentMethod,
        creditCardDetails,
        paypalEmail,
        upiDetails
      });
      res.status(201).json(payment);
    } catch (error) {
      console.error('Error creating payment:', error); // Log the error for debugging
      res.status(500).json({ error: 'Failed to create payment', details: error.message });
    }
  };
  

const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch payments', details: error.message });
  }
};

const getPaymentById = async (req, res) => {
  try {
    const { email } = req.params;
    const payments = await PaymentInfo.findAll({ where: { email } });
 
    if (payments.length === 0) {
      return res.status(404).json({ success: false, message: 'No payments found for this email' });
    }
 
    res.status(200).json({ success: true, payments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to retrieve payment information' });
  }
};


const getPaymentsByEmail = async (req, res) => {
    const { email } = req.params;
    
    try {
      const payments = await Payment.findAll({ where: { email } });
      if (payments.length > 0) {
        res.status(200).json(payments);
      } else {
        res.status(404).json({ error: 'No payments found for this email' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch payments by email', details: error.message });
    }
  };

module.exports = { createPayment, getAllPayments, getPaymentById,getPaymentsByEmail };
