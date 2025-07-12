const express = require('express');
const router = express.Router();
const marsController = require('../controllers/mars.controller');


router.get('/:rover/photos', marsController.getRoverPhotos);


router.get('/:rover/manifest', marsController.getRoverManifest);

module.exports = router;