require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Simple NASA APOD proxy
app.get('/api/apod', async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://api.nasa.gov/planetary/apod',
      { params: { api_key: process.env.NASA_API_KEY } }
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
