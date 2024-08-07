const express = require('express');
const router = express.Router();
const { createPayment, getAllPayments, getPaymentById,getPaymentsByEmail } = require('../controllers/paymentController');

router.post('/payments', createPayment);
router.get('/payments', getAllPayments);
router.get('/payments/:email', getPaymentsByEmail);

module.exports = router;
