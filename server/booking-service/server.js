const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.json());

// Endpoint for updating a booking
app.post('/api/booking/update', (req, res) => {
  const bookingData = req.body;
  // Here you would normally update the booking details in your database
  // and perform any business logic needed.
  
  // Emit a real-time event to connected clients
  io.emit('bookingUpdated', bookingData);
  res.json({ message: 'Booking updated and real-time event emitted', data: bookingData });
});

// Socket.IO connection handler
io.on('connection', (socket) => {
  console.log('A client connected');
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Booking Service running on port ${PORT}`);
});
