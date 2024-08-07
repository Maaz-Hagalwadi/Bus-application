
const express = require('express');
const router = express.Router();
const { jsPDF } = require('jspdf');
require('jspdf-autotable');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { recipientEmail, bookingData, pdfFileName } = req.body;

  try {
    const pdfBuffer = await generatePDFBuffer(bookingData);
    await sendEmailWithAttachment(recipientEmail, pdfBuffer, pdfFileName);

    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});
async function generatePDFBuffer(bookingData) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new jsPDF();
      doc.setFontSize(22);
      doc.text('MyBus', 105, 20, 'center');
      doc.setFontSize(18);
      doc.text('Invoice', 105, 35, 'center');

    
      doc.text('Bus Details:', 20, 100);
      doc.autoTable({
        startY: 105,
        head: [['Attribute', 'Value']],
        body: [
          ['Bus Name', bookingData.busName || ''],
          ['Bus Number', bookingData.busNumber || ''],
          ['From', bookingData.from || ''],
          ['To', bookingData.to || ''],
          ['Type', bookingData.busType || ''],
          ['Departure', new Date(bookingData.departure).toLocaleString()],
          ['Arrival', new Date(bookingData.arrival).toLocaleString()],
          ['Fare', `₹ ${bookingData.fare ? bookingData.fare.toLocaleString() : ''}`],
          ['Selected Seats', bookingData.selectedSeats ? bookingData.selectedSeats.join(', ') : ''],
          ['Number of Passengers', bookingData.passenger_details ? bookingData.passenger_details.length.toString() : ''],
          ['Booking Date', new Date(bookingData.bookingDate).toLocaleDateString()],
        ],
        didDrawPage: (data) => {
          doc.setFontSize(12);
          doc.text('Page ' + doc.internal.getNumberOfPages(), data.settings.margin.left, doc.internal.pageSize.height - 10);
        },
      });

      doc.setFontSize(16);
      doc.text(`Discount: ₹ ${bookingData.discountAmount ? bookingData.discountAmount.toLocaleString() : ''}`, 20, doc.autoTable.previous.finalY + 20);
      doc.text(`GST (5%): ₹ ${bookingData.GST ? bookingData.GST.toLocaleString() : ''}`, 20, doc.autoTable.previous.finalY + 40);
      doc.text(`Total: ₹ ${bookingData.cartTotal ? bookingData.cartTotal.toLocaleString() : ''}`, 20, doc.autoTable.previous.finalY + 60);

      
      const pdfBuffer = doc.output('arraybuffer');
      resolve(Buffer.from(pdfBuffer)); 
    } catch (error) {
      console.error('Error generating PDF:', error);
      reject('Failed to generate PDF.');
    }
  });
}


// Function to send email with attachment
async function sendEmailWithAttachment(recipientEmail, pdfBuffer, pdfFileName) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'maazhgl66@gmail.com',
        pass: 'fpukclzjkvwzwamq' 
      }
    });

    const mailOptions = {
      from: 'your_email@gmail.com',
      to: recipientEmail, 
      subject: 'MyBus Booking Invoice',
      text: 'Please find your booking invoice attached.',
      attachments: [
        {
          filename: pdfFileName,
          content: pdfBuffer,
          encoding: 'base64'
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email.');
  }
}


module.exports = router;