const nasaService = require('../services/nasa.service');

const getNeoFeed = async (req, res, next) => {
  try {
    const { start_date, end_date } = req.query;
    
    if (!start_date) {
      return res.status(400).json({
        error: 'start_date parameter is required'
      });
    }

    const neoData = await nasaService.getNeoFeed(
      start_date,
      end_date || new Date(new Date(start_date).getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    );
    res.json(neoData);
  } catch (error) {
    next(error);
  }
};

const getNeoLookup = async (req, res, next) => {
  try {
    const { asteroid_id } = req.params;
    
    if (!asteroid_id) {
      return res.status(400).json({
        error: 'asteroid_id parameter is required'
      });
    }

    const neoData = await nasaService.getNeoLookup(asteroid_id);
    res.json(neoData);
  } catch (error) {
    next(error);
  }
};

const getNeoBrowse = async (req, res, next) => {
  try {
    const neoData = await nasaService.getNeoBrowse();
    res.json(neoData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNeoFeed,
  getNeoLookup,
  getNeoBrowse
};