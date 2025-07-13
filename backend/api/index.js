const express = require('express');
const cors = require('cors');

const apodRoutes = require('../src/routes/apod.routes');
const techTransferRoutes = require('../src/routes/techtransfer.routes');
const neoRoutes = require('../src/routes/neo.routes');
const marsRoutes = require('../src/routes/mars.routes');

const app = express();

// ✅ Use your actual frontend domain here
const allowedOrigins = [
                          // For local dev
  'https://nasa-project-xi.vercel.app/',             // 🔁 Replace this with YOUR real frontend Vercel domain
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow request
    } else {
      callback(new Error('Not allowed by CORS')); // Reject request
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/apod', apodRoutes);
app.use('/techtransfer', techTransferRoutes);
app.use('/neo', neoRoutes);
app.use('/mars', marsRoutes);

app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Something went wrong!' });
});

module.exports = app;
