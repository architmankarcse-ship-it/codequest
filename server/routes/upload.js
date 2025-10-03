const express = require('express');
const router = express.Router();
const {uploadVideo} = require('../controllers/uploadController');
router.post('/video', uploadVideo);
module.exports = router;
