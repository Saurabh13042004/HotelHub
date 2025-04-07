const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(bodyParser.json());

app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
