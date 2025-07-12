const express = require('express');
const router = express.Router();
const techTransferController = require('../controllers/techtransfer.controller');


router.get('/patent', techTransferController.getPatents);


router.get('/patent_issued', techTransferController.getPatentsIssued);


router.get('/software', techTransferController.getSoftware);


router.get('/spinoff', techTransferController.getSpinoffs);

module.exports = router;