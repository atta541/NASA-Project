const nasaService = require('../services/nasa.service');

const getAPOD = async (req, res, next) => {
  try {
    const { date } = req.query;
    const params = date ? { date } : {};
    const apodData = await nasaService.getAPOD(params);
    res.json(apodData);
  } catch (error) {
    next(error);
  }
};

const getAPODRange = async (req, res, next) => {
  try {
    const { start_date, end_date } = req.query;
    
    if (!start_date || !end_date) {
      return res.status(400).json({
        error: 'Both start_date and end_date parameters are required'
      });
    }

    const apodData = await nasaService.getAPODRange(start_date, end_date);
    res.json(apodData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAPOD,
  getAPODRange
};