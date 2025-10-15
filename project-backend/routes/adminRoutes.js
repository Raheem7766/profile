const express = require('express');
const router = express.Router();
const { validateApiKey } = require('../middleware/auth');
const { createAdmin, adminLogin } = require('../controllers/adminController');

// Admin routes
router.post('/login', adminLogin);
router.post('/', validateApiKey, createAdmin);

module.exports = router;
