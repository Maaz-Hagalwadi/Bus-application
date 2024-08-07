const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());
app.use(cors());


const registerRoute = require('./routes/registerRoute');
const loginRoute = require('./routes/login');
const forgotPasswordRoute = require('./routes/forgotPassword');
const paymentRoutes = require('./Route/paymentRoutes');
const verifyOtpRoute = require('./routes/verifyOtp');
const bus=require('./Route/busRoute');
const booking=require('./Route/bookingRoutes');
const schedulerFile = require('./routes/schedulerFile');




const driver=require('./Route/driversRoute');
const seat=require('./Route/selectedSeatsRoutes');
const emailController = require('./routes/emailController');


app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/forgotPassword', forgotPasswordRoute);
app.use('/verifyOtp', verifyOtpRoute);
app.use('/bus',bus);
app.use('/booking',booking);
app.use('/driver',driver);
app.use('/seat',seat);
app.use('/email', emailController); 
// Use the payment routes
app.use('/payment', paymentRoutes);

// require('./scheduler/seatHoldScheduler');


app.get('/', (req, res) => {
  res.send('Welcome to the Bus Booking Application');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
