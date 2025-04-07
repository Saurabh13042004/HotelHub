const express = require('express');
const router = express.Router();
const { initiatePayment, verifyOTP } = require('../controllers/paymentController');

router.post('/initiate', async (req, res) => {
  try {
    const result = await initiatePayment(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const result = await verifyOTP(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
