const express = require('express');
const router = express.Router();
const neoController = require('../controllers/neo.controller');


router.get('/feed', neoController.getNeoFeed);
router.get('/lookup/:asteroid_id', neoController.getNeoLookup);
router.get('/browse', neoController.getNeoBrowse);

module.exports = router;