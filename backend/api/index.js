const express = require('express');
const cors    = require('cors');

const apodRoutes        = require('../src/routes/apod.routes');
const techTransferRoutes = require('../src/routes/techtransfer.routes');
const neoRoutes          = require('../src/routes/neo.routes');
const marsRoutes         = require('../src/routes/mars.routes');

const app = express();

const allowedOrigins = [
  'http://localhost:3000',               // dev
  'https://nasa-project-xi.vercel.app',    // production
];

const corsOptions = {
  origin(origin, cb) {
    if (!origin || allowedOrigins.includes(origin)) {
      return cb(null, true);             // ✅ allow
    }
    return cb(new Error('Not allowed by CORS')); // ❌ block
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/apod',         apodRoutes);
app.use('/techtransfer', techTransferRoutes);
app.use('/neo',          neoRoutes);
app.use('/mars',         marsRoutes);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

module.exports = app;
