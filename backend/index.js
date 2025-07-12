require('dotenv').config();
const express = require('express');
const cors = require('cors');
const apodRoutes = require('./src/routes/apod.routes');
const techTransferRoutes = require('./src/routes/techtransfer.routes');
const neoRoutes = require('./src/routes/neo.routes');
const marsRoutes = require('./src/routes/mars.routes');




const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors()); 
app.use(express.json());


app.use('/apod', apodRoutes);
app.use('/techtransfer', techTransferRoutes);
app.use('/neo', neoRoutes);
app.use('/mars', marsRoutes);





app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});