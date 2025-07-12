const express = require('express');
const router = express.Router();
const apodController = require('../controllers/apod.controller');


router.get('/', apodController.getAPOD);


router.get('/range', apodController.getAPODRange);

module.exports = router;