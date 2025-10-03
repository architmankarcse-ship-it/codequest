const express = require('express');
const router = express.Router();
const {createPost, getPublicFeed} = require('../controllers/publicController');
router.post('/post', createPost);
router.get('/feed', getPublicFeed);
module.exports = router;
