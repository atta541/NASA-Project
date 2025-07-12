const express = require('express');
const router = express.Router();
const marsController = require('../controllers/mars.controller');

// GET /mars/:rover/photos - Get photos by rover
router.get('/:rover/photos', marsController.getRoverPhotos);

// GET /mars/:rover/manifest - Get mission manifest by rover
router.get('/:rover/manifest', marsController.getRoverManifest);

module.exports = router;