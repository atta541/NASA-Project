const express = require('express');
const router = express.Router();
const neoController = require('../controllers/neo.controller');

// GET /neo/feed - Get asteroids approaching Earth in date range
router.get('/feed', neoController.getNeoFeed);

// GET /neo/lookup/:asteroid_id - Lookup specific asteroid
router.get('/lookup/:asteroid_id', neoController.getNeoLookup);

// GET /neo/browse - Browse all asteroids
router.get('/browse', neoController.getNeoBrowse);

module.exports = router;