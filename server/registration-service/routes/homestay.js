const express = require('express');
const router = express.Router();
const homestayController = require('../controllers/homestayController');

// POST /api/homestay/register - Homestay registration by the owner
router.post('/register', homestayController.registerHomestay);

// GET /api/homestay/pending - Admin: List pending homestay registrations
router.get('/pending', homestayController.getPendingHomestays);

// POST /api/homestay/approve/:id - Admin: Approve a homestay registration
router.post('/approve/:id', homestayController.approveHomestay);

module.exports = router;
