const express = require('express');
const router = express.Router();
const {requestReset, resetPassword, generatePassword} = require('../controllers/passwordController');
router.post('/request', requestReset);
router.post('/reset', resetPassword);
router.get('/generate', generatePassword);
module.exports = router;
