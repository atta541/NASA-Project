// api/index.js
require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const apodRoutes        = require('../src/routes/apod.routes');
const techTransferRoutes = require('../src/routes/techtransfer.routes');
const neoRoutes          = require('../src/routes/neo.routes');
const marsRoutes         = require('../src/routes/mars.routes');

const app = express();

/* ---------- CORS ---------- */

// Primary source: env var (so you can change it without touching code)
// Fallback: hard‑coded production URL
const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL || 'https://nasa-project-xi.vercel.app/';

// Allow local dev, too
const ALLOWED_ORIGINS = [FRONTEND_URL, 'http://localhost:3000'];

const corsOptions = {
  origin(origin, cb) {
    // If no Origin header (e.g. cURL) allow it; otherwise check list
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      return cb(null, true);
    }
    cb(new Error('Not allowed by CORS'));
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

/* ---------- Routes ---------- */
app.use('/apod',         apodRoutes);
app.use('/techtransfer', techTransferRoutes);
app.use('/neo',          neoRoutes);
app.use('/mars',         marsRoutes);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;   // Vercel’s serverless function entry
