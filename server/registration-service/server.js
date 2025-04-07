const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const homestayRoutes = require('./routes/homestay');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB (update the connection string as needed)
mongoose.connect('mongodb://localhost:27017/hotel_booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Route definitions
app.use('/api/auth', authRoutes);
app.use('/api/homestay', homestayRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Registration Service running on port ${PORT}`);
});
