const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/adminController');

router.get('/settings', getSettings);
router.post('/settings', updateSettings);

module.exports = router;
