const express = require('express');
const router = express.Router();
const {transferPoints, getPoints} = require('../controllers/rewardController');
router.post('/transfer', transferPoints);
router.get('/me', getPoints);
module.exports = router;
