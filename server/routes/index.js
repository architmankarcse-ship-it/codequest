const express = require('express');
const router = express.Router();
router.use('/auth', require('./auth'));
router.use('/upload', require('./upload'));
router.use('/public', require('./public'));
router.use('/subscription', require('./subscription'));
router.use('/reward', require('./reward'));
router.use('/password', require('./password'));
module.exports = router;
