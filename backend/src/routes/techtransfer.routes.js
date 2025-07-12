const express = require('express');
const router = express.Router();
const techTransferController = require('../controllers/techtransfer.controller');

// GET /techtransfer/patent - Search patents
router.get('/patent', techTransferController.getPatents);

// GET /techtransfer/patent_issued - Search issued patents
router.get('/patent_issued', techTransferController.getPatentsIssued);

// GET /techtransfer/software - Search software
router.get('/software', techTransferController.getSoftware);

// GET /techtransfer/spinoff - Search spinoffs
router.get('/spinoff', techTransferController.getSpinoffs);

module.exports = router;