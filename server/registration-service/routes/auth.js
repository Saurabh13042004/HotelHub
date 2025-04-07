const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/register - Register a new user (admin, homestayOwner, or agent)
router.post('/register', authController.registerUser);

// POST /api/auth/login - Login a user
router.post('/login', authController.loginUser);

module.exports = router;
