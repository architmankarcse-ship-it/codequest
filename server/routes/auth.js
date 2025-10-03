const express = require('express');
const router = express.Router();
const {googleAuth, phoneOtp, verifyOtp} = require('../controllers/authController');

router.post('/google', googleAuth); // exchange token from frontend
router.post('/phone/request-otp', phoneOtp);
router.post('/phone/verify', verifyOtp);

module.exports = router;
