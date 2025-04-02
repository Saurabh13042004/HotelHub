const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.use(express.json());

// Proxy payment requests to Payment Service on port 3001
app.use('/api/payment', proxy('http://localhost:3001'));

// Proxy booking requests to Booking Service on port 3000
app.use('/api/booking', proxy('http://localhost:3000'));


app.use('/api/registration', proxy('http://localhost:3003'));


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
