const express = require('express');
const router = express.Router();
const apodController = require('../controllers/apod.controller');

// GET /apod - Get today's APOD or specific date
router.get('/', apodController.getAPOD);

// GET /apod/range - Get APODs for a date range
router.get('/range', apodController.getAPODRange);

module.exports = router;